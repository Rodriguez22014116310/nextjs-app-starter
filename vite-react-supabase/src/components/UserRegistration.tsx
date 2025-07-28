import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

interface UserRegistrationProps {
  searchQuery: string
}

interface PendingUser {
  id: string
  full_name: string
  lrn_usn: string
  user_type: string
  status: 'pending' | 'approved' | 'denied'
  created_at: string
}

export default function UserRegistration({ searchQuery }: UserRegistrationProps) {
  const [pendingUsers, setPendingUsers] = useState<PendingUser[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data for demonstration - replace with actual Supabase queries
  useEffect(() => {
    const mockUsers: PendingUser[] = [
      {
        id: '1',
        full_name: 'Admin User',
        lrn_usn: 'LRN/USN',
        user_type: 'Admin User',
        status: 'pending',
        created_at: new Date().toISOString(),
      },
      {
        id: '2',
        full_name: 'Student User',
        lrn_usn: 'LRN/USN',
        user_type: 'Student User',
        status: 'pending',
        created_at: new Date().toISOString(),
      },
    ]
    
    setPendingUsers(mockUsers)
    setLoading(false)
  }, [])

  const handleApprove = async (userId: string) => {
    try {
      // Update user status in database
      setPendingUsers(prev => 
        prev.map(user => 
          user.id === userId ? { ...user, status: 'approved' as const } : user
        )
      )
      // Here you would make the actual Supabase call
      // await supabase.from('users').update({ status: 'approved' }).eq('id', userId)
    } catch (error) {
      console.error('Error approving user:', error)
    }
  }

  const handleDeny = async (userId: string) => {
    try {
      // Update user status in database
      setPendingUsers(prev => 
        prev.map(user => 
          user.id === userId ? { ...user, status: 'denied' as const } : user
        )
      )
      // Here you would make the actual Supabase call
      // await supabase.from('users').update({ status: 'denied' }).eq('id', userId)
    } catch (error) {
      console.error('Error denying user:', error)
    }
  }

  const filteredUsers = pendingUsers.filter(user =>
    user.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lrn_usn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.user_type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">User Registration</h2>
        <p className="text-gray-600">Review and approve pending user registrations</p>
      </div>

      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* User Avatar */}
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                {/* User Details */}
                <div>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500">Full Name</span>
                    <div className="text-lg font-semibold text-gray-900">{user.full_name}</div>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500">LRN/USN</span>
                    <div className="text-gray-700">{user.lrn_usn}</div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">User Type</span>
                    <div className="text-gray-700">{user.user_type}</div>
                  </div>
                  <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                    User Details
                  </button>
                </div>
              </div>

              {/* User Type Badge and Actions */}
              <div className="flex flex-col items-end space-y-3">
                <div className="text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {user.user_type}
                  </span>
                </div>
                
                {user.status === 'pending' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleApprove(user.id)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDeny(user.id)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                      Deny
                    </button>
                  </div>
                )}
                
                {user.status === 'approved' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Approved
                  </span>
                )}
                
                {user.status === 'denied' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    Denied
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">No pending registrations found</div>
        </div>
      )}
    </div>
  )
}
