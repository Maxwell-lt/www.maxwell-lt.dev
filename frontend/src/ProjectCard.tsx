
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardHeader, Collapse } from "@mui/material"
import { useState } from "react"

export const ProjectCard = ({ title, links, children }: { title: string, links: { title: string, href: string }[], children: any }) => {
    const [showContent, setShowContent] = useState(false);
    const handleExpandClick = () => {
        setShowContent(!showContent)
    }
    const renderExpandIcon = () => {
        return showContent ? <ExpandLess></ExpandLess> : <ExpandMore></ExpandMore>
    }
    return (
        <Card className="about-grid-card" sx={{ mt: 1, mb: 1 }}>
            <CardHeader title={title} onClick={handleExpandClick} action={renderExpandIcon()}/>
            <Collapse in={showContent}>
                <CardContent>
                    {children}
                </CardContent>
                <CardActions>
                    {links.map(link => (
                        <Button size="small" href={link.href}>{link.title}</Button>
                    ))}
                </CardActions>
            </Collapse>
        </Card>
    )
}