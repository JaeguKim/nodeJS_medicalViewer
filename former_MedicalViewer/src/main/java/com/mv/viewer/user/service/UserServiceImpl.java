package com.mv.viewer.user.service;

import java.util.Collection;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
 
import com.mv.viewer.user.domain.User;
import com.mv.viewer.user.mapper.UserMapper;
 
@Service
public class UserServiceImpl implements UserService {
	 @Autowired UserMapper userMapper;
	 private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
 
     @Override // 반드시 구현 필요.
     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
          User user = userMapper.readUser(username); 	 // user 정보를 읽어와서
          user.setAuthorities(getAuthorities(username)); // 권한 부여
          return user;
     }
     
     public Collection<GrantedAuthority> getAuthorities(String username) {
    	 Collection<GrantedAuthority> authorities = userMapper.readAuthority(username);
         return authorities;
     }
     
     @Override
     public User readUser(String username) {
          User user = userMapper.readUser(username);
          user.setAuthorities(userMapper.readAuthority(username));
          return user;
     }
 
     @Override
     public void createUser(User user) {
          String rawPassword = user.getPassword();
          String encodedPassword = new BCryptPasswordEncoder().encode(rawPassword);
          user.setPassword(encodedPassword);
          userMapper.createUser(user);
          userMapper.createAuthority(user);
     }
 
     @Override
     public void deleteUser(String username) {
          userMapper.deleteUser(username);
          userMapper.deleteAuthority(username);
     }
 
 
     @Override
     public PasswordEncoder passwordEncoder() {
          return this.passwordEncoder;
     }
}