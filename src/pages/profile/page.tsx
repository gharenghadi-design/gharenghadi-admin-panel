import { useState } from "react";
import { Camera, Save } from "lucide-react";
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from "../../components/ui/elements";
import { Avatar } from "../../components/ui/elements";

export function ProfilePage() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [bio, setBio] = useState("Full-stack developer and admin panel manager.");

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-500 mt-1">Manage your personal information and preferences.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar name={name} size="lg" />
              <button className="absolute -bottom-1 -right-1 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <Camera size={14} />
              </button>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{name}</p>
              <p className="text-xs text-gray-500">{email}</p>
              <Button size="sm" variant="outline" className="mt-2">Change Photo</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
            <Input label="Location" placeholder="City, Country" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Bio</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input label="Current Password" type="password" placeholder="Enter current password" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="New Password" type="password" placeholder="Enter new password" />
            <Input label="Confirm Password" type="password" placeholder="Confirm new password" />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button icon={<Save size={16} />}>Save Changes</Button>
      </div>
    </div>
  );
}

// profile validation
