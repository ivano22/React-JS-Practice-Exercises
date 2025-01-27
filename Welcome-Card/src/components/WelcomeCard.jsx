 
const WelcomeCard = ({ name ,message }) => {
    
    return (
       
        <div className = "block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mt-20 cursor-pointer">
            <h2 className="text-center">Hello {name}</h2>
            <p className=" p-4 mb-10 text-center">{ message}.</p>
        </div>
    );
     
}

export default WelcomeCard;