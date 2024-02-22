export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100 text-">
      <div className="flex flex-col w-1/4 bg-white border-r">
        <div className="flex items-center justify-center p-4 shadow">
          <span className="font-bold">Conversations</span>
        </div>
        <div className="overflow-y-auto">
          <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/40x40"
                alt="Profile image of Amit RG"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Amit RG</div>
              <div className="text-sm text-gray-500">Facebook DM</div>
              <div className="text-sm text-gray-500">Awesome Product</div>
            </div>
          </div>
          <div className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/40x40"
                alt="Profile image of Hiten Saxena"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                Hiten Saxena
              </div>
              <div className="text-sm text-gray-500">Facebook Post</div>
              <div className="text-sm text-gray-500">Available in store?</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/4 border-r">
        <div className="flex items-center justify-between p-4 shadow">
          <span className="font-bold">Amit RG</span>
          <i className="fas fa-times"></i>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div className="overflow-y-auto p-4">
            <div className="flex items-center mb-4">
              <div className="rounded bg-gray-300 px-4 py-2">
                <p className="text-sm">Is it in stock right now?</p>
              </div>
            </div>
            <div className="flex items-center justify-end mb-4">
              <div className="rounded bg-blue-500 text-white px-4 py-2">
                <p className="text-sm">We’ve 3 left in stock!</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="rounded bg-gray-300 px-4 py-2">
                <p className="text-sm">
                  If you order before 8PM we can ship it today.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 shadow">
            <input
              type="text"
              className="w-full rounded p-2"
              placeholder="Type a message..."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="flex items-center justify-between p-4 shadow">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://placehold.co/40x40"
              alt="Profile image of Amit RG"
            />
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Amit RG</div>
              <div className="text-xs text-gray-500">Offline</div>
            </div>
          </div>
          <div>
            <button className="text-blue-500 hover:text-blue-700">
              <i className="fas fa-phone"></i>
            </button>
            <button className="text-blue-500 hover:text-blue-700 ml-2">
              <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Customer details</h3>
            <div className="text-sm">
              <div className="mb-2">
                <strong>Email</strong> amit@richpanel.com
              </div>
              <div className="mb-2">
                <strong>First Name</strong> Amit
              </div>
              <div className="mb-2">
                <strong>Last Name</strong> RG
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-sm">
                View more details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
