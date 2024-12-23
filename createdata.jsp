
<%@page contentType="text/html" pageEncoding="UTF-8"
        import="java.sql.*"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sq" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>


       <% String x=request.getParameter("name");
       String y=request.getParameter("number");
       String z=request.getParameter("email");
       String d=request.getParameter("password");
       
       out.println("Adress "+d);
    try{
            Class.forName("com.mysql.jdbc.Driver");
            Connection c =DriverManager.getConnection("jdbc:mysql://localhost:3307/renthero","root","Ram1234");
            Statement s=c.createStatement();
             int a=s.executeUpdate("insert into users (name,Adress,contact,password) "
             + "values ('"+name+"','"+number+"','"+email+"','"+password+"')");
       
           }

catch(Exception e)
       {
       e.printStackTrace();
       }
       
       
       %>


    </body>
</html>
