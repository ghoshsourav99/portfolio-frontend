// About.jsx
import { Box, Typography, Chip, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";

const techStack = [
  "React.js",
  "Next.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Material UI",
  "Responsive Design",
  "Restful APIs",
  "Git",
  "GitHub",
  "Vite",
  "Webpack",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "SSR & SSG",
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 10,
        background: "linear-gradient(to right, #ffffff, #f0f4ff)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#1a237e" }}
        >
          About Me 💡
        </Typography>

        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 4, background: "#fff", mb: 4 }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "800px", mb: 2 }}
          >
            I'm a Frontend Developer passionate about building modern,
            responsive, and user-friendly web applications. I specialize in
            creating clean interfaces and seamless user experiences using
            React.js, Next.js, JavaScript, and Material UI.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "800px", mb: 2 }}
          >
            Recently, I completed my MERN Stack Developer Internship at 99 Ideas
            SaaS India Pvt. Ltd., where I worked primarily on frontend
            development for real-world projects. My experience includes
            developing admin dashboards, company websites, API integrations,
            AI-powered chatbot features, and migrating React applications to
            Next.js using SSR and SSG.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "800px" }}
          >
            I enjoy turning complex requirements into intuitive digital
            experiences while focusing on performance, scalability, and
            maintainable code. I'm constantly exploring new technologies and
            improving my development skills to build better products and solve
            real-world problems.
          </Typography>
        </Paper>

        <Typography variant="h6" fontWeight="medium" gutterBottom>
          Tech I Work With:
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={2}>
          {techStack.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              variant="outlined"
              color={idx % 2 === 0 ? "primary" : "secondary"}
              sx={{
                fontWeight: 500,
                px: 2,
                py: 1,
                fontSize: "0.9rem",
              }}
            />
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default About;
