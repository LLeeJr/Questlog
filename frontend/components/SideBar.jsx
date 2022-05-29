import classNames from 'classnames'
import React, {useState} from 'react'

const SideBar = () => {
    const [toogleCollapse, settoogleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible ] = useState(false);
 
    const wrapperClasses = classNames(
        'h-screen px-4 pt-8 pb-4 bg-primary flex justify-between flex-col  text-qlyellow',
        {
            ['w-80']: !toogleCollapse,
            ['w-20']: toogleCollapse,
        }
        );

    const collapseButtonClasses = classNames(
        'p-4 rounded bg-primaryweak absolute right-0',
        {
            "rotate-180": toogleCollapse,
        }

    );

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };
    
    const handleSidebarToggle = () => {
        settoogleCollapse(!toogleCollapse);
    }

  return (
    <div className={wrapperClasses} 
        onMouseEnter={onMouseOver} 
        onMouseLeave={onMouseOver}
        style = {{transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s'}}
    >
        <div className='flex flex-col'>
            <div className='flex items-center justify-between relative'>
                <div className='flex items-center pl-1 gap-4'>
                    <span className={classNames('mt-2 text-lg font-medium', 
                    {
                        hidden: toogleCollapse
                    })}
                    >
                    questlog
                    </span>
                </div>
                {isCollapsible && (<button className={collapseButtonClasses} onClick = {handleSidebarToggle}>
                    X
                </button>)}
            </div>
        </div> 
        <div>
            middlestuff
        </div> 
        <div>
            logout
        </div>
    </div>
  )
}

export default SideBar