import './Spinner.css';

function Spinner() {
    return (
        <div className="flex flex-col item-center space-y-2">
            <div class="custom-loader"></div>
            <p className='text-bgDark text-lg font-semibold '>Loading...</p>
        </div>
    )
}

export default Spinner;