import React from 'react'
import { Navbar, Link, Text } from "@nextui-org/react";
import { Layout } from "./navComp/Layout";

function NAvbar() {
  const collapseItems = [
    "Home",
    "Top Companies",
    "Category",
    "Jobs",
    "Login",
    "Sign Up",
  ];

  return (
    <Layout>
      <Navbar isCompact isBordered variant="static">
        <Navbar.Brand>
          <Text b color="inherit">
            JobLinkr
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="#comp">Top Companies</Navbar.Link>
          <Navbar.Link href="/jobs">Jobs</Navbar.Link>
          <Navbar.Link href="#cat">Category</Navbar.Link>

          {/* <Navbar.Link href="#post">Post Job</Navbar.Link> */}
          <Navbar.Link color="inherit" href="/login">
            Login
          </Navbar.Link>
          <Navbar.Link color="inherit" href="/signup">
            SignUp
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
      </Navbar>
    </Layout>
  )
}

export default NAvbar