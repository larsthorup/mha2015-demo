var code = require('../src/code');
var sinon = require('sinon');

describe('code', function () {

  describe('addSlow', function () {

    it('should eventually return a+b', function () {
      code.addSlow(4, 5, function (result) {
        result.should.equal(9);
      });
    });

    it('should eventually return a+b', function (done) {
      code.addSlow(4, 5, function (result) {
        result.should.equal(9);
        done();
      });
    });

  });

  describe('adding', function () {
    it('should eventually return a+b', function (done) {
      code.adding(4, 5).then(function (result) {
        result.should.equal(9);
        done();
      });
    });
    it('should eventually return a+b', function () {
      return code.adding(4, 5).should.become(9);
    });
  });

  describe('faking time', function () {
    beforeEach(function () {
      this.sinon = sinon.sandbox.create({useFakeTimers: true});
    });
    afterEach(function () {
      this.sinon.restore();
    });

    describe('addSlow', function () {
      it('should eventually return a+b', function () {
        code.addSlow(4, 5, function (result) {
          result.should.equal(9);
        });
        this.sinon.clock.tick(500);
      });
    });

    describe('adding', function () {
      it('should eventually return a+b', function () {
        var adding = code.adding(4, 5);
        this.sinon.clock.tick(500);
        return adding.should.become(9);
      });
    });
  });

});