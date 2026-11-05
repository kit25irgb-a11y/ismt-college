# ISMT College - Modern College Website

A professional, responsive college website built with Next.js, TypeScript, and Tailwind CSS. This project is designed for educational purposes as part of a Level 5 Cloud Computing assignment.

## 🚀 Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment Target**: Ubuntu 22.04 Azure Virtual Machine
- **Process Manager**: PM2
- **Web Server**: Nginx
- **SSL**: Certbot (Let's Encrypt)

## 🛠️ Installation & Development

### Prerequisites
- Node.js 20.x or later
- npm 10.x or later

### Local Installation
1. Clone the repository:
   \`\`\`bash
   git clone <your-repo-url>
   cd ismt-college
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Production Deployment (Azure VM)

This project is configured for a standard Node.js production environment and does not require Vercel.

### 1. Build the Application
On your Ubuntu VM, run:
\`\`\`bash
npm install
npm run build
\`\`\`

### 2. Run with PM2
To ensure the application runs continuously in the background:
\`\`\`bash
npm install -g pm2
pm2 start npm --name "ismt-college" -- start
pm2 save
pm2 startup
\`\`\`

### 3. Nginx Reverse Proxy Configuration
Create an Nginx configuration file:
\`\`\`bash
sudo nano /etc/nginx/sites-available/ismt-college
\`\`\`

Add the following configuration:
\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

Enable the site and restart Nginx:
\`\`\`bash
sudo ln -s /etc/nginx/sites-available/ismt-college /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
\`\`\`

### 4. SSL with Certbot
Secure your site with HTTPS:
\`\`\`bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
\`\`\`

## 📤 GitHub Upload Instructions

1. Create a new repository on GitHub.
2. Initialize git in your project folder:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit: Professional College Website"
   \`\`\`
3. Link to GitHub and push:
   \`\`\`bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   \`\`\`

## 📂 Project Structure

\`\`\`
src/
├── app/                # Next.js App Router (Pages & Layouts)
│   ├── about/         # About Us page
│   ├── admissions/    # Admissions page
│   ├── contact/       # Contact Us page
│   ├── courses/       # Courses list page
│   ├── news/          # News & Events page
│   └── student-life/   # Student Life page
├── components/        # Reusable UI Components
│   ├── layout/        # Header, Footer, etc.
│   └── ui/            # Basic UI elements
├── constants/         # Static data and configuration
├── lib/               # Utility functions (cn helper)
└── types/              # TypeScript type definitions
\`\`\`
