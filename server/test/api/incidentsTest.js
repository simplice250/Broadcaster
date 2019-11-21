const chai=require('chai');
let expect = require('chai').expect;
let chaiHttp = require('chai-http');
const app= require('../../server');
const incidents=require('../helpers/incidents');
chai.use(chaiHttp);
chai.should();

describe('incident test', () => {

    it('should not be able to create an incident when title is not sent', (done) => {
        chai.request(app).post('/redflag').send(incidents[0])
          .end((err, res) => {
            res.should.have.status(400);
            done();
          })
          }) ;
          
    it('should not be able to create an incident when type is not sent', (done) => {
        chai.request(app).post('/redflag').send(incidents[1])
          .end((err, res) => {
            res.should.have.status(400);
            done();
          })
          }) ;

          it('should  be able to create an incident when all clear', (done) => {
            chai.request(app).post('/redflag').send(incidents[2])
              .end((err, res) => {
                res.should.have.status(201);
                done();
              })
              }) ;
                    
    it('should not be able to create an incident when title already exist', (done) => {
        chai.request(app).post('/redflag').send(incidents[2])
          .end((err, res) => {
            res.should.have.status(401);
            done();
          })
          }) ;
 
          it('should  be able to get all incidents', (done) => {
            chai.request(app).get('/redflag')
              .end((err, res) => {
                res.should.have.status(200);
                done();
              })
              }) ;
              it('should  be able to get specific incident', (done) => {
                  const id=3;
                chai.request(app).get(`/redflag/${id}`)
                  .end((err, res) => {
                    res.should.have.status(200);
                    done();
                  })
                  }) ;
                  it('should  not be able to get specific incident when id is not valid', (done) => {
                    const id=1;
                  chai.request(app).get(`/redflag/${id}`)
                    .end((err, res) => {
                      res.should.have.status(400);
                      done();
                    })
                    }) ;

                    it('should  not be able to update location for specific incident when invalid id', (done) => {
                        const id=1;
                      chai.request(app).patch(`/redflag/${id}/location`)
                        .end((err, res) => {
                          res.should.have.status(404);
                          done();
                        })
                        }) ;
    
                        it('should be able to update location for specific incident when all clear', (done) => {
                            const id=3;
                          chai.request(app).patch(`/redflag/${id}/location`)
                            .end((err, res) => {
                              res.should.have.status(200);
                              done();
                            })
                            }) ;
        

    




});