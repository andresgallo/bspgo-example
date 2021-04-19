/**
 * IF current page matches applicable content types then append floating action bar. 
 * - In reality this just appends the script... 
 *     The actual action bar is published within AddThis admin panel
 */
const applicableContentTypes = [ // Append for other applicable content types
    'Page'
]

document.addEventListener('DOMContentLoaded', () => {
    let appended = false
    const elScr = document.createElement('script')
    elScr.setAttribute('type', 'text/javascript')
    elScr.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-607d19986fa40a31'
    console.log('elScr', elScr)

    applicableContentTypes.forEach(iter => {
        if (document.documentElement.classList.contains(iter) && !appended) {
            document.head.appendChild(elScr)
            appended = true
        }
    })
})
