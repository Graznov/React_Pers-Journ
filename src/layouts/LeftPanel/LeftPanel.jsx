import './LeftPanel.css'
function LeftPanel({children}){
    console.log('LeftPanel')
    return(
        <div className={'left-panel'}>
            {children}
        </div>
    )
}
export default LeftPanel