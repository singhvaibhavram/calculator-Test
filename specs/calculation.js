describe('Super Calculator Testing', function(){
  var firstNumber = element(by.model('first'));
  var operatorToUseSelect = element(by.model('operator'));
  var secondNumber = element(by.model('second'));
  var calculationButton = element(by.id('gobutton'));
  var calcResult = element(by.css('h2.ng-binding'));
  //var history = element(by.repeater('result in memory'));

  it('return the result', function(){
    calculationOperation(2, '-', 1);
    expect(calcResult.getText()).toEqual('1');
  });

  function calculationOperation(a, operator, b){
    firstNumber.sendKeys(a);
    operatorSelector(operatorToUseSelect, operator);
    secondNumber.sendKeys(b);
    calculationButton.click()
  }

  function operatorSelector(dropdown, optionValue){
    if(!optionValue){
      return;
    }
    dropdown.all(by.tagName('option')).then(getOperator(optionValue));
  }

  function getOperator(expectedValue){
    return function(options){
      for (var i = 0; i < options.length; i++){
        var option = options[i];
        ifmatchingOperator(option, expectedValue);
      }
    };
  }

  function ifmatchingOperator(option, expectedValue){
    option.getWebElement().getInnerHtml().then(function(optionValue){
      if(optionValue === expectedValue){
        option.click();
      }
    });
  }

});
