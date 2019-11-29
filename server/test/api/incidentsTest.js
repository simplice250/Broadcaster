import chai from 'chai';
import  chaiHttp from 'chai-http';
import  app from '../../server.js';
import  incidents from '../helpers/incidents';
chai.use(chaiHttp);

describe('incident test', () => {

    it('should not be able to create an incident when title is not sent', (done) => {
        chai.request(app).post('/api/v1/incident/create').send(incidents[0])
          .end((err, res) => {
            res.should.have.status(400);
            done();
          })
          }) ;
          
    it('should not be able to create an incident when type is not sent', (done) => {
        chai.request(app).post('/api/v1/incident/create').send(incidents[1])
          .end((err, res) => {
            res.should.have.status(400);
            done();
          })
          }) ;

          it('should  be able to create an incident when all clear', (done) => {
            chai.request(app).post('/api/v1/incident/create').send(incidents[2])
              .end((err, res) => {
                res.should.have.status(201);
                done();
              })
              }) ;
    
 
        it('should  be able to get all incidents', (done) => {
            chai.request(app).get('/api/v1/incident/getAll')
              .end((err, res) => {
                res.should.have.status(200);
                done();
              })
              }) ;
              it('should  be able to get specific incident', (done) => {
                  const id=1;
                chai.request(app).get(`/api/v1/incident/find/${id}`)
                  .end((err, res) => {
                    res.should.have.status(200);
                    done();
                  })
                  }) ;
                  it('should  not be able to get specific incident when id is not valid', (done) => {
                    const id=9;
                  chai.request(app).get(`/api/v1/incident/find/${id}`)
                    .end((err, res) => {
                      res.should.have.status(400);
                      done();
                    })
                    }) ;

                    it('should  not be able to update location for specific incident when invalid id', (done) => {
                        const id=9;
                      chai.request(app).patch(`/api/v1/incident/edit/${id}/location`)
                        .end((err, res) => {
                          res.should.have.status(404);
                          done();
                        })
                        }) ;
    
                        it('should be able to update location for specific incident when all clear', (done) => {
                            const id=1;
                          chai.request(app).patch(`/api/v1/incident/edit/${id}/location`)
                            .end((err, res) => {
                              res.should.have.status(200);
                              done();
                            })
                            }) ;
        

    




});