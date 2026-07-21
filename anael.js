document.querySelectorAll('[class*=cssvar--]').forEach((el)=>{
	let prop = el.classList.value.match(/cssvar\S+/gm)[0].replace('cssvar--','').split('--');
	el.style.setProperty('--'+prop[0], prop[1]);
})


let viewportPaddingTop = 0;
if (document.querySelector('.headerFW '))
    viewportPaddingTop += parseInt(window.getComputedStyle(document.querySelector('.headerFW ')).height );
// if (document.querySelector('.mod_breadcrumb '))
    // viewportPaddingTop += parseInt(window.getComputedStyle(document.querySelector('.mod_breadcrumb ')).height );
viewportPaddingTop += 'px';
document.documentElement.style.setProperty('--viewport-padding-top',viewportPaddingTop );



// HEADER
/**
 * switch the header between reduced and not-reduced states
 * @param  {Boolean} reduce 
 */
app.HeaderFW.prototype.navSwitcher = function(reduce = false){
    var header = this;
    if (reduce) {
        header.$el.addClass('is-reduce');
        if (header.$search) header.$search.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
        if (header.$lang)   header.$lang.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
        if (header.$topbar) header.$topbar.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
    } else {
        header.$el.removeClass('is-reduce');
        if (header.$search) header.$nav.append(header.$search);
        if (header.$lang)   header.$nav.append(header.$lang);
        if (header.$topbar) header.$topbar.prependTo(header.$el);
    }
};


app.HeaderFW.prototype.panelChecker = function(){
    var header = this;
    if (header.$navPanel.hasClass('active')) {
        if(header.$el.hasClass('is-pinned')){
            // header.$navPanel.css('height', viewport.height - header.$el.outerHeight() + 1);
        }
        else {
            // header.$navPanel.css('height', viewport.height - (header.$el.position().top + header.$el.outerHeight()) + 1);
        }
            // header.$navPanel.css('height', viewport.height - (header.$el.get(0).getBoundingClientRect().top + header.$el.outerHeight()));
            // header.$navPanel.css('height', viewport.height - (header.$el.get(0).getBoundingClientRect().top + header.$el.outerHeight()) + 1);
    }
};


window.addEventListener("load", function(e) {
    setTimeout(function(){

        $('body').on('click', '.sliderFW__rail.multiple .sliderFW__item:not(.active)', function(e) {
            let slider = $(this).closest('.sliderFW').sliderFW('get');
            let iActive = slider.content.items.toArray().indexOf(slider.$el.find('.sliderFW__item.active').get(0));
            let iTarget = slider.content.items.toArray().indexOf(this);
            // console.log(slider,iActive,iTarget);
            if (iActive > iTarget)
                slider.goToPrev();
            else if (iActive < iTarget)
                slider.goToNext()
        });

        if (document.querySelector('.headerFW')) {
            var header = app.components_active.headerFW[0];
            header.$navPanel.prepend('<div class="panel__header"><div class="panel__close"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></div>');
            header.$navPanel.find('.panel__close').on('click',function(){
              header.$toggler.trigger('click');
            });
            
        }

        // CUSTOM TABS
        if (document.querySelector('.tabs[change-on-url]')) {
            navigation.addEventListener("navigate", (event) => {
                // console.log('navigate',event);
                setTimeout(function(){
                    document.querySelectorAll('.tabs[change-on-url]').forEach((tabs)=>{
                        let param = tabs.getAttribute('change-on-url');
                        let value = location.href.split(param+'/')[1] ?? false;
                        // console.log(param, value);
                        tabs.querySelectorAll('.tab').forEach((tab)=>{tab.classList.remove('active')})
                        if (!value)
                            return false;
                        tabs.querySelector('.tab#'+value).classList.add('active');
                        tabs.querySelector('.tab#'+value).scrollIntoView({behavior: "smooth",block:"center",inline:"nearest"}); 
                    })
                },10)
            })
            window.history.pushState({},"","");
        }


        if (document.querySelector('#navMarkets_tabsnav')) {
            $('#navMarkets_tabsnav a').on('click',function(e){
                e.preventDefault();
                window.history.pushState({},"",this.href);
            })
        }

        // window.dispatchEvent(new Event('resize'));
    },10)
});