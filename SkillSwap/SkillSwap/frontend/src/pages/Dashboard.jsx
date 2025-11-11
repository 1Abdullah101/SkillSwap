import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  UsersIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  const { data: userData, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error loading dashboard data
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            {isAdmin && (
              <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20">
                <ShieldCheckIcon className="mr-1 h-4 w-4" />
                Admin
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome section */}
        <div className="mt-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Welcome back, {userData?.firstName || 'User'}!
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  {isAdmin
                    ? 'You have access to administrative features and can manage the platform.'
                    : 'Here\'s an overview of your skill exchange activities.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Skills to Learn */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <AcademicCapIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Skills to Learn</dt>
                      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">0</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills to Teach */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserGroupIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Skills to Teach</dt>
                      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">0</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Exchanges */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ChartBarIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Active Exchanges</dt>
                      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">0</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin section */}
        {isAdmin && (
          <div className="mt-8">
            <h2 className="text-base font-semibold leading-6 text-gray-900 mb-4">Admin Controls</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* User Management */}
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <UsersIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">User Management</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Manage user accounts, roles, and permissions
                      </p>
                      <button className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-500">
                        Manage Users →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Settings */}
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CogIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">Platform Settings</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Configure platform settings and preferences
                      </p>
                      <button className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-500">
                        Settings →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <ChartBarIcon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">Analytics</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        View platform usage and performance metrics
                      </p>
                      <button className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-500">
                        View Analytics →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Recent Activity
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>No recent activity to display.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 