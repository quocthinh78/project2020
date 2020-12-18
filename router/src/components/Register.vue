<template>
    <div>
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header">
                                        <h3 class="text-center font-weight-light my-4">Đăng ký</h3>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label class="small mb-1" >Tên</label>
                                            <input  v-model="username" class="form-control py-4" id="name" name="name" type="text" placeholder="Name" />
                                        </div>
                                        <div class="form-group" id=box-error>
                                            <label class="small mb-1" for="inputEmailAddress">Email</label>
                                            <input  v-model="email" class="form-control py-4" id="inputEmailAddress" name="email" type="email" placeholder="Địa chỉ Email" />
                                            <small  v-if="error">{{error}}</small>
                                        </div>
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputPassword">Mật khẩu</label>
                                            <input v-model="password" class="form-control py-4" id="inputPassword" type="password" name="password" placeholder="Nhập mật khẩu" />
                                        </div>
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputPassword">Xác nhận mật khẩu</label>
                                            <input v-model="passwordCofirm" class="form-control py-4" id="inputPassword" type="password" name="passwordCofirm" placeholder="Nhập mật khẩu" />
                                        </div>
                                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <button class="btn btn-primary" @click="register">Đăng nhập</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            username : null,
            password : null,
            email : null ,
            passwordCofirm : null,
            error:'',        
        }
    },
    methods: {
        register(){
            if(this.password == this.passwordCofirm){
                var data = {
                    name:this.username ,
                    password: this.password,
                    email : this.email
                }
                axios.post('http://localhost:3000/user', data)
                .then(res=>{
                    this.error = res.data;
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            else {
                alert('Xác thực mật khẩu không chính xác')
            }
        }
    },
}
</script>