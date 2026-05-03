//package com.hotelapppackage.HotelApps.security;
//
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.*;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.security.Keys;
//
//import org.springframework.stereotype.Component;
//import java.util.Date;
//
//import javax.crypto.SecretKey;
//
//@Component
//public class JwtUtil {
//	//private final String SECRET = "secretkey";
//	private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
//
//    public String generateToken(String email) {
//        return Jwts.builder()
//                .setSubject(email)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
//                .signWith(SECRET_KEY)
//                .compact();
//    }
//
//    public String extractEmail(String token) {
//        return Jwts.parserBuilder()
//                .setSigningKey(SECRET_KEY)
//                .build()
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//
//}


package com.hotelapppackage.HotelApps.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.util.Date;
import javax.crypto.SecretKey;

@Component
public class JwtUtil {

    // ✅ ثابت (minimum 32 characters)
    private final String SECRET = "mySuperSecretKeymySuperSecretKey123456";

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }

    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(getSigningKey())
                .compact();
    }

    public String extractEmail(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
