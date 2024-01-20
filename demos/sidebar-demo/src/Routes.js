import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InsightsIcon from '@mui/icons-material/Insights';
import ListIcon from '@mui/icons-material/List';
import MapIcon from '@mui/icons-material/Map';
import TuneIcon from '@mui/icons-material/Tune';
import PersonIcon from '@mui/icons-material/Person';

export const routes = {
    sections: [
        {
            title: "GENERAL",
            list: [
                {
                    name: "Dashboard",
                    path: "/",
                    icon: DashboardIcon
                },
                {
                    name: "Deployments",
                    path: "/d",
                    icon: LayersIcon,
                    subLinks: [
                        {
                            name: "List View",
                            icon: ListIcon,
                            path: "/d"
                        },
                        {
                            name: "Map View",
                            icon: MapIcon,
                            path: "/d"
                        }
                    ]
                },
                {
                    name: "New Rental",
                    path: "/n",
                    icon: CreateNewFolderIcon
                },
                {
                    name: "Service Schedule",
                    path: "/s",
                    icon: TaskAltIcon
                },
                {
                    name: "Tasks",
                    path: "/t",
                    icon: AssignmentIndIcon
                },
                {
                    name: "Reporting",
                    path: "/r",
                    icon: InsightsIcon
                }
            ]
        },
        {
            title: "MY SPACES",
            list: [
                {
                    name: "All",
                    path: "/c",
                    icon: TuneIcon
                },
                {
                    name: "Assigned to me",
                    path: "/c",
                    icon: PersonIcon
                }
            ]
        }
    ]
}