<template>
    <div class="container">
        <div class="row main_Div">
            <router-link to="/">Go back</router-link>
            <h5 class="text-center"> AI Voice Changer Admin panel
            </h5>
          <ul>
            <li><p>
                Manage your profile, update settings, and other Detail. 
            </p></li>
            <li><p>
                <b>Blog</b> The admin can Create,update,and Delete the Blog,
            </p></li>
            <li><p>
                <b>Contact </b>See all the Mail User has Sent
            </p></li>
            <li><p>
               <b> Subscription</b> Check subscription list and also add the Subscription.
            </p></li>
            <li><p>
                <b>New Subscription</b> The Admin Can See the New Subcription
            </p></li>
            <li><p>
               <b> Community </b> The admin Has check the Community, The today post 
            </p></li>
            <li><p>
                Also there is other functionality can admin can do, Like Update Subcription, Cancel Subscription at any time,They can Upadte the Profile Section
            </p></li>

          </ul>
          <div class="col-md-12">
                <ul class="skillListUse">
                    <li><button class="skill-btn">HTML</button></li>
                    <li><button class="skill-btn">Css</button></li>
                    <li><button class="skill-btn">Bootstap 5</button></li>
                    <li><button class="skill-btn">Vue</button></li>
                    <li><button class="skill-btn">Paina</button></li>
                    <li><button class="skill-btn">Firebase</button></li>
                    <li><button class="skill-btn">Quill Editor</button></li>
                    <li><button class="skill-btn">Stripe.js</button></li>
                </ul>
            </div>
            <div class="col-md-12">
                <img src="../../../assets/AIAdminPanel/ADMIN1.webp" alt="" class="img-fluid">
            </div>
            
            <div class="col-md-12">
                <img src="../../../assets/AIAdminPanel/ADMIN2.webp" alt="" class="img-fluid">
            </div>
            <div class="col-md-12">
                <img src="../../../assets/AIAdminPanel/ADMIN3.webp" alt="" class="img-fluid">
            </div>
            <div class="col-md-12">
                <img src="../../../assets/AIAdminPanel/ADMIN4.webp" alt="" class="img-fluid">
            </div>
            
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>


/* Skills List */
.skillListUse {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  justify-content: center;
}
.skillListUse li {
  list-style: none;
}
.skill-btn {
  background: linear-gradient(90deg, var(--Theme-Color, #ff4d6d), #6f42c1);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 6px 14px;
  font-size: 0.9rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
.skill-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.main_Div{
   border: 2px solid white;
   padding: 10px 10px 10px 10px;
}
.main_Div ul {
    margin-left: 20px;
}
.main_Div ul li{
    list-style-type: decimal;
}
.main_Div  Img{
    border-radius: 10px;
    margin-bottom: 20px;
}
a{
    width:80px;
    height: 30px;
    padding-top: 3px;
    border-radius: 5px ;
    text-decoration: none;
}
a:hover{
    width:80px;
    background-color: red;
    height: 30px;
    padding-top: 3px;
    border-radius: 5px ;
    text-decoration: none;
    color: white;
}
</style>