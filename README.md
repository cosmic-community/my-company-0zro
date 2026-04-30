# My Company - Education Sector Website

![App Preview](https://imgix.cosmicjs.com/08203010-4447-11f1-9f85-e7af420a77a5-autopilot-photo-1494790108377-be9c29b29330-1777520729482.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive Next.js 16 website for an education sector company. Features a beautiful homepage, services showcase, team member profiles, and client testimonials, all powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🏠 Beautiful homepage with hero section
- 🎓 Services showcase with detailed pages
- 👥 Team members display
- 💬 Client testimonials
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 16
- 🎨 Modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f2d013ad4b5e824c09d05b&clone_repository=69f2d0e3ad4b5e824c09d08c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a company website with services, team members, and testimonials.
> 
> User instructions: education sector"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: education sector

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Cosmic account with bucket configured

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all services
const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

// Fetch team members
const team = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This app uses the [Cosmic SDK](https://www.cosmicjs.com/docs) to fetch content from three object types: services, team-members, and testimonials. All content is fetched server-side for optimal performance.

## Deployment Options

- **Vercel**: Deploy directly from GitHub
- **Netlify**: Configure build command as `bun run build`

Set environment variables in your hosting platform's dashboard.

<!-- README_END -->