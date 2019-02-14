$ (document).ready (() => {
    $ (document).on ('click', '.btn-search', () => {
        $ ('.nav-link').css ('margin-right', '40px');

        if (window.matchMedia ('(min-width: 992px)').matches) {
            $ ('.form-search').animate ({width: '190px'}, 300);

        } else {
            $ ('.form-search').animate ({width: '1080px'}, 300);
        }

        $ ('.input-search').css ('display', 'block');
    });

    class Product {
        constructor(switchNumber,
                    customControl,
                    switchPlus,
                    switchMinus,
                    switchCostVal,
                    switchCostMonth,
                    countVal,
                    countOff) {

            $ (document).on ('click', switchNumber, () => {
                $ (customControl).toggleClass ('checkActive');

                if ($ (customControl).hasClass ('checkActive') === true) {
                    $ (switchPlus).on ('click', function () {
                        $ (this).prev ().text (+$ (this).prev ().text () + 1);
                        $ (switchCostVal).text (+$ (switchCostVal).text () * 2);
                        $ (switchCostMonth).text (+$ (switchCostMonth).text () * 2);
                    });
                    $ (switchMinus).on ('click', function () {
                        if ($ (this).next ().text () > 1) {
                            $ (this).next ().text (+$ (this).next ().text () - 1);
                            $ (switchCostVal).text (+$ (switchCostVal).text () / 2);
                            $ (switchCostMonth).text (+$ (switchCostMonth).text () / 2);
                        }
                    });
                } else {
                    $ (countVal).text (1);
                    $ (switchCostVal).text (5353);
                    $ (switchCostMonth).text (53);
                    $ (countOff).off ('click');
                }
            })
        }
    }

    new Product (
        '#customSwitch1',
        '.custom-control1',
        '#switch1 .plus',
        '#switch1 .minus',
        '#switch1 .cost-val',
        '#switch1 .cost-month',
        '#switch1 .count-val',
        '#switch1 .plus, #switch1 .minus'
    );

    new Product (
        '#customSwitch2',
        '.custom-control2',
        '#switch2 .plus',
        '#switch2 .minus',
        '#switch2 .cost-val',
        '#switch2 .cost-month',
        '#switch2 .count-val',
        '#switch2 .plus, #switch2 .minus'
    );

    new Product (
        '#customSwitch3',
        '.custom-control3',
        '#switch3 .plus',
        '#switch3 .minus',
        '#switch3 .cost-val',
        '#switch3 .cost-month',
        '#switch3 .count-val',
        '#switch3 .plus, #switch3 .minus'
    );

    new Product (
        '#customSwitch4',
        '.custom-control4',
        '#switch4 .plus',
        '#switch4 .minus',
        '#switch4 .cost-val',
        '#switch4 .cost-month',
        '#switch4 .count-val',
        '#switch4 .plus, #switch4 .minus'
    );
});
