import { useState } from 'react';

function LoginForm() {
  // hard coded values to validate email and password
  const validEmail = 'test@example.com';
  const validPassword = 'password123';

  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to store the message to display
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if email and password match the hardcoded values
    email === validEmail && password === validPassword
      ? setMessage('Welcome back!')
      : setMessage(`Invalid email or password. Please try again.`);
  };

  return (
    <div className="w-full max-w-md p-6 space-y-6 mx-auto mt-10 text-center border-1 ">
      <h1 className=" text-4x1  text-center  mt-6 font-bold">Login Form</h1>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="space-y-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-green-700 cursor-pointer"
        >
          {' '}
          Login
        </button>
      </form>
      {message && (
        <p className=" font-bold text-center text-2x1 mt-4 text-green-500">
          {message}
        </p>
      )}
    </div>
  );
}

export default LoginForm;
