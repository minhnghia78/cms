import React, { useEffect } from 'react';
import { 
  Card, 
  Button, 
  Space, 
  Typography, 
  Divider, 
  List, 
  Tag, 
  Form, 
  Input, 
  Select,
  Spin,
  Alert 
} from 'antd';
import { 
  LoginOutlined, 
  LogoutOutlined, 
  PlusOutlined, 
  UserOutlined,
  EditOutlined,
  DeleteOutlined 
} from '@ant-design/icons';
import { 
  useAuthStore, 
  useCategoryStore, 
  usePostStore, 
  useUIStore,
  showSuccessNotification,
  showErrorNotification 
} from '../store';
import { useAuth } from '../hooks';

const { Title, Text } = Typography;
const { Option } = Select;

const ZustandExample: React.FC = () => {
  const { 
    login, 
    logout, 
    user, 
    isAuthenticated, 
    isLoading: authLoading, 
    isAdmin 
  } = useAuth();

  const {
    categories,
    isLoading: categoriesLoading,
    error: categoriesError,
    fetchCategories,
    createCategory
  } = useCategoryStore();

  const {
    posts,
    isLoading: postsLoading,
    error: postsError,
    pagination,
    fetchPosts,
    createPost
  } = usePostStore();

  const {
    theme,
    sidebarCollapsed,
    toggleTheme,
    toggleSidebar
  } = useUIStore();

  const [loginForm] = Form.useForm();
  const [categoryForm] = Form.useForm();
  const [postForm] = Form.useForm();

  // Load data on component mount
  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  const handleLogin = async (values: any) => {
    try {
      await login(values);
      loginForm.resetFields();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleCreateCategory = async (values: any) => {
    try {
      await createCategory(values);
      categoryForm.resetFields();
      showSuccessNotification('Success', 'Category created successfully!');
    } catch (error) {
      console.error('Failed to create category:', error);
    }
  };

  const handleCreatePost = async (values: any) => {
    try {
      await createPost(values);
      postForm.resetFields();
      showSuccessNotification('Success', 'Post created successfully!');
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={2}>Zustand Store Demo</Title>
      
      {/* UI State Demo */}
      <Card title="UI State Management" style={{ marginBottom: 16 }}>
        <Space>
          <Button onClick={toggleTheme}>
            Current Theme: <Tag color={theme === 'light' ? 'blue' : 'purple'}>{theme}</Tag>
          </Button>
          <Button onClick={toggleSidebar}>
            Sidebar: <Tag color={sidebarCollapsed ? 'red' : 'green'}>
              {sidebarCollapsed ? 'Collapsed' : 'Expanded'}
            </Tag>
          </Button>
          <Button onClick={() => showSuccessNotification('Test', 'This is a test notification!')}>
            Test Notification
          </Button>
        </Space>
      </Card>

      <Divider />

      {/* Authentication Demo */}
      <Card title="Authentication State" style={{ marginBottom: 16 }}>
        {isAuthenticated ? (
          <Space direction="vertical" style={{ width: '100%' }}>
            <div>
              <UserOutlined /> Welcome, <strong>{user?.firstName} {user?.lastName}</strong>
              <Tag color={isAdmin ? 'red' : 'blue'} style={{ marginLeft: 8 }}>
                {user?.role}
              </Tag>
            </div>
            <Button 
              type="primary" 
              danger 
              icon={<LogoutOutlined />} 
              onClick={logout}
            >
              Logout
            </Button>
          </Space>
        ) : (
          <Form
            form={loginForm}
            layout="inline"
            onFinish={handleLogin}
            style={{ width: '100%' }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input username!' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                icon={<LoginOutlined />}
                loading={authLoading}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>

      <Divider />

      {/* Categories Demo */}
      <Card title="Categories Management" style={{ marginBottom: 16 }}>
        {categoriesError && (
          <Alert message="Error" description={categoriesError} type="error" showIcon style={{ marginBottom: 16 }} />
        )}
        
        <Spin spinning={categoriesLoading}>
          <Space direction="vertical" style={{ width: '100%' }}>
            {isAdmin && (
              <Form
                form={categoryForm}
                layout="inline"
                onFinish={handleCreateCategory}
                style={{ marginBottom: 16 }}
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please input category name!' }]}
                >
                  <Input placeholder="Category Name" />
                </Form.Item>
                <Form.Item
                  name="description"
                  rules={[{ required: true, message: 'Please input description!' }]}
                >
                  <Input placeholder="Description" />
                </Form.Item>
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    icon={<PlusOutlined />}
                    loading={categoriesLoading}
                  >
                    Add Category
                  </Button>
                </Form.Item>
              </Form>
            )}

            <List
              dataSource={categories}
              renderItem={(category) => (
                <List.Item
                  actions={isAdmin ? [
                    <Button key="edit" type="link" icon={<EditOutlined />}>Edit</Button>,
                    <Button key="delete" type="link" danger icon={<DeleteOutlined />}>Delete</Button>
                  ] : []}
                >
                  <List.Item.Meta
                    title={category.name}
                    description={category.description}
                  />
                  <Tag color={category.isActive ? 'green' : 'red'}>
                    {category.isActive ? 'Active' : 'Inactive'}
                  </Tag>
                </List.Item>
              )}
            />
          </Space>
        </Spin>
      </Card>

      <Divider />

      {/* Posts Demo */}
      <Card title="Posts Management" style={{ marginBottom: 16 }}>
        {postsError && (
          <Alert message="Error" description={postsError} type="error" showIcon style={{ marginBottom: 16 }} />
        )}

        <Spin spinning={postsLoading}>
          <Space direction="vertical" style={{ width: '100%' }}>
            {isAuthenticated && (
              <Form
                form={postForm}
                layout="vertical"
                onFinish={handleCreatePost}
                style={{ marginBottom: 16 }}
              >
                <Form.Item
                  name="title"
                  label="Post Title"
                  rules={[{ required: true, message: 'Please input post title!' }]}
                >
                  <Input placeholder="Enter post title" />
                </Form.Item>
                <Form.Item
                  name="content"
                  label="Content"
                  rules={[{ required: true, message: 'Please input content!' }]}
                >
                  <Input.TextArea rows={4} placeholder="Enter post content" />
                </Form.Item>
                <Form.Item
                  name="categoryId"
                  label="Category"
                  rules={[{ required: true, message: 'Please select a category!' }]}
                >
                  <Select placeholder="Select category">
                    {categories.map(category => (
                      <Option key={category.id} value={category.id}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="status"
                  label="Status"
                  rules={[{ required: true, message: 'Please select status!' }]}
                >
                  <Select defaultValue="DRAFT">
                    <Option value="DRAFT">Draft</Option>
                    <Option value="PUBLISHED">Published</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    icon={<PlusOutlined />}
                    loading={postsLoading}
                  >
                    Create Post
                  </Button>
                </Form.Item>
              </Form>
            )}

            <div style={{ marginBottom: 16 }}>
              <Text strong>
                Total Posts: {pagination.totalElements} | Page: {pagination.page + 1} of {pagination.totalPages}
              </Text>
            </div>

            <List
              dataSource={posts}
              renderItem={(post) => (
                <List.Item
                  actions={[
                    <Button key="edit" type="link" icon={<EditOutlined />}>Edit</Button>,
                    ...(isAdmin || post.authorId === user?.id ? [
                      <Button key="delete" type="link" danger icon={<DeleteOutlined />}>Delete</Button>
                    ] : [])
                  ]}
                >
                  <List.Item.Meta
                    title={post.title}
                    description={
                      <Space>
                        <Text type="secondary">By: {post.authorName}</Text>
                        <Text type="secondary">Category: {post.categoryName}</Text>
                        <Tag color={
                          post.status === 'PUBLISHED' ? 'green' : 
                          post.status === 'DRAFT' ? 'blue' : 'red'
                        }>
                          {post.status}
                        </Tag>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Space>
        </Spin>
      </Card>
    </div>
  );
};

export default ZustandExample; 