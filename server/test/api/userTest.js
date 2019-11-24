const chai=require('chai');
let expect = require('chai').expect;
let chaiHttp = require('chai-http');
const app= require('../../server');
const users=require('../helpers/usersSignup');
chai.use(chaiHttp);
chai.should();


    describe('user test', () => {
        
      it('should not be able to signup when email is not sent', (done) => {
        chai.request(app).post('/auth/signup').send(users[0])
          .end((err, res) => {
            res.should.have.status(400);
            done();
          })
          }) ;


          it('should not be able to signup when first name is not sent', (done) => {
            chai.request(app).post('/auth/signup').send(users[1])
              .end((err, res) => {
                res.should.have.status(400);
                done();
              })
              }) ;
     
              it('should not be able to signup when last name is not sent', (done) => {
                chai.request(app).post('/auth/signup').send(users[2])
                  .end((err, res) => {
                    res.should.have.status(400);
                    done();
                  })
                  }) ;
         
                  it('should  be able to signup when all is clear', (done) => {
                    chai.request(app).post('/auth/signup').send(users[3])
                      .end((err, res) => {
                        res.should.have.status(201);
                        done();
                      })
                      }) ;
                  

                      it('should not be able to signup when user already exist', (done) => {
                        chai.request(app).post('/auth/signup').send(users[3])
                          .end((err, res) => {
                            res.should.have.status(409);
                            done();
                          })
                          }) ;

                          it('should  be able to get a specific user ', (done) => {
                            const userId=4;
                            chai.request(app).get(`/auth/signup/${userId}`)
                              .end((err, res) => {
                                res.should.have.status(200);
                                done();
                              })
                              }) ;
                          
                          it('should  be able to get all users ', (done) => {
                            chai.request(app).get('/auth/signup')
                              .end((err, res) => {
                                res.should.have.status(200);
                                done();
                              })
                              }) ;
                              it('should not be able to update when id is not valid', (done) => {
                                const userId=1;
                                chai.request(app).put(`/auth/signup/${userId}`).send(users[5])
                                  .end((err, res) => {
                                    res.should.have.status(400);
                                    done();
                                  })
                                  }) ;

                                  it('should  be able to update when id is valid', (done) => {
                                    const userId=5;
                                    chai.request(app).put(`/auth/signup/${userId}`).send(users[5])
                                      .end((err, res) => {
                                        res.should.have.status(200);
                                        done();
                                      })
                                      }) ;

                                      it('should  not be able to delete when id is invalid', (done) => {
                                        const userId=1;
                                        chai.request(app).delete(`/auth/signup/${userId}`).send(users[5])
                                          .end((err, res) => {
                                            res.should.have.status(400);
                                            done();
                                          })
                                          }) ;
                                          it('should   be able to delete when id is valid', (done) => {
                                            const userId=5;
                                            chai.request(app).delete(`/auth/signup/${userId}`).send(users[5])
                                              .end((err, res) => {
                                                res.should.have.status(200);
                                                done();
                                              })
                                              }) ;
                         
                          
                          

                          it('should not be able to signin when no user has such email', (done) => {
                            chai.request(app).post('/auth/signin').send(users[4])
                              .end((err, res) => {
                                res.should.have.status(400);
                                done();
                              })
                              }) ;

                              it('should not be able to signin when no user has such email', (done) => {
                                chai.request(app).post('/auth/signin').send(users[5])
                                  .end((err, res) => {
                                    res.should.have.status(400);
                                    done();
                                  })
                                  }) ;
                                  it('should  be able to signin when email and password are valid', (done) => {
                                    chai.request(app).post('/auth/signin').send(users[3])
                                      .end((err, res) => {
                                        res.should.have.status(200);
                                        done();
                                      })
                                      }) ;
                                  
    


     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        });   



                  
       

     