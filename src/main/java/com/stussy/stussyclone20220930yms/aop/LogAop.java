package com.stussy.stussyclone20220930yms.aop;


import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.CodeSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
public class LogAop {

    @Pointcut("execution(* com.stussy.stussyclone20220930yms.api.*Api.*(..))")
    private void pointCut(){}

    @Pointcut("@annotation(com.stussy.stussyclone20220930yms.aop.annotation.LogAspect)")
    private void annotationPointCut(){}

    @Around("annotationPointCut()")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable{
        CodeSignature codeSignature = (CodeSignature) joinPoint.getSignature();
        String methodName = codeSignature.getName();
        String className = codeSignature.getDeclaringTypeName();
        String[] parameterNames = codeSignature.getParameterNames();
        Object[] args = joinPoint.getArgs();

        for(int i = 0; i< parameterNames.length; i++){
            log.info("<<<< Parameter Info >>>> {}.{} >>> [{}: {}]", className, methodName,parameterNames[i],args[i]);
        }

        Object result = joinPoint.proceed();

        log.info("<<<< Return >>>> {}.{} >>>>>>> [{}]", className, methodName, result);
            return result;
        }


}
