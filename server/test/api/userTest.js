import  chai from 'chai';
import  chaiHttp from'chai-http';
import  app from '../../server';
import  users from '../helpers/usersSignup';
chai.use(chaiHttp);
chai.should();


    describe('user test', () => {
        
      it('should not be able to signup when email is not sent', (done) => {
        chai.request(app).post('/api/v1/user/auth/signup').send(users[0])
          .end((err, res) => {
            res.should.have.status(400);
            done();
          })
          }) ;


          it('should not be able to signup when first name is not sent', (done) => {
            chai.request(app).post('/api/v1/user/auth/signup').send(users[1])
              .end((err, res) => {
                res.should.have.status(400);
                done();
              })
              }) ;
     
              it('should not be able to signup when last name is not sent', (done) => {
                chai.request(app).post('/api/v1/user/auth/signup').send(users[2])
                  .end((err, res) => {
                    res.should.have.status(400);
                    done();
                  })
                  }) ;
         
                  it('should  be able to signup when all is clear', (done) => {
                    chai.request(app).post('/api/v1/user/auth/signup').send(users[3])
                      .end((err, res) => {
                        res.should.have.status(201);
                        done();
                      })
                      }) ;
                      
                      

                      it('should not be able to signup when user already exist', (done) => {
                        chai.request(app).post('/api/v1/user/auth/signup').send(users[3])
                          .end((err, res) => {
                            res.should.have.status(409);
                            done();
                          })
                          }) ;

                          it('should  be able to get a specific user ', (done) => {
                            const userId=1;
                            chai.request(app).get(`/api/v1/user/find/${userId}`)
                              .end((err, res) => {
                                res.should.have.status(200);
                                done();
                              })
                              }) ;
                          
                          it('should  be able to get all users ', (done) => {
                            chai.request(app).get('/api/v1/user/getAll')
                              .end((err, res) => {
                                res.should.have.status(200);
                                done();
                              })
                              }) ;
                              it('should not be able to update when id is not valid', (done) => {
                                const userId=9;
                                chai.request(app).put(`/api/v1/user/edit/${userId}`).send(users[5])
                                  .end((err, res) => {
                                    res.should.have.status(400);
                                    done();
                                  })
                                  }) ;

                                  it('should  be able to update when id is valid', (done) => {
                                    const userId=1;
                                    chai.request(app).put(`/api/v1/user/edit/${userId}`).send(users[5])
                                      .end((err, res) => {
                                        res.should.have.status(200);
                                        done();
                                      })
                                      }) ;

                                      it('should  not be able to delete when id is invalid', (done) => {
                                        const userId=9;
                                        chai.request(app).delete(`/api/v1/user/delete/${userId}`).send(users[5])
                                          .end((err, res) => {
                                            res.should.have.status(400);
                                            done();
                                          })
                                          }) ;
                                          it('should   be able to delete when id is valid', (done) => {
                                            const userId=1;
                                            chai.request(app).delete(`/api/v1/user/delete/${userId}`).send(users[5])
                                              .end((err, res) => {
                                                res.should.have.status(200);
                                                done();
                                              })
                                              }) ;
                         
                          
                          

                          it('should not be able to signin when no user has such email', (done) => {
                            chai.request(app).post('/api/v1/user/auth/signin').send(users[5])
                              .end((err, res) => {
                                res.should.have.status(400);
                                done();
                              })
                              }) ;

                              it('should not be able to signin when no user has such email', (done) => {
                                chai.request(app).post('/api/v1/user/auth/signin').send(users[5])
                                  .end((err, res) => {
                                    res.should.have.status(400);
                                    done();
                                  })
                                  }) ;
                                  
    


     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        });   



                  
       

     