interface Person {
    name: string;
    resources: Resource[];
    skills: Skill[];
}

interface Resource {
    link: string;
    icon: Icon;
    name: string;
}

interface Icon{
  name: string;
  color: string;
}

interface Skill {
    name: string;
    width: string;
    icon: Icon[];
    description: string;
}

const skills: Skill[] = [
  {
    name: "Linux Administration",
    width: 'med',
    icon: [{
        name: "ant-design:linux-outlined",
        color: 'text-stone-50',
    }],
    description:
      "<b style='color: #ff5f5fe5;'>RHCSA</b> and <b style='color: #fff;'>Linux+</b> certified. I have managed <em style='color: #5fe9ffe5;'>300+</em> RHEL servers implementing Satellite, IAM, and ansiblizing deployments. I have used tools following Brendan Gregg's <b><i>Systems Performance</i></b> guide to increase performance. One example was increasing IO throughput by <em style='color: #7aff5fe5;'>20%</em> by adjusting mount parameters.",
  },
  {
    name: "Kubernetes",
    width: 'large',
    icon: [
        {
            name: "skill-icons:kubernetes",
            color: 'text-stone-50',
        },
        {
            name: "simple-icons:cilium",
            color: 'text-yellow-200',
        },
        {
            name: "logos:openshift",
            color: '',
        },
        {
            name: "devicon:k3s",
            color: '',
        }

],
    description:
      "<b style='color: #326CE5;'>CKA</b> and <b class='text-yellow-200'>CCA</b> certified. I have built out on-prem and EKS clusters with Kubernetes and Cilium. Cilium with egress gateway and BGP allowed us to apply the most secure network policies for on-prem environments. In EKS we were able to connect separated clusters. I have experience creating clusters with <em class='text-yellow-100'>K3s</em>, <em class='text-purple-400'>Terraform</em>, and <em class='text-blue-400'>Kubespray</em>. I have also worked with <em class='text-red-400'>Talos</em> for non prod environments. <br><br> I have implemented monitoring for Kubernetes clusters nearing 1000 projects. I used eBPF for network tracing, Elasticsearch for APM/Logging, and Prometheus with Grafana for metrics and visualizations. I have implemented Datadog and Vector in EKS environments. <em class='text-sky-400'>Vector</em> was used to reduce metric and logging costs by <b class='text-red-600'>80%.</b>", 
  },

  {
    name: "Rust",
    width: 'med',
    icon: [{
        name: "teenyicons:rust-outline",
        color: 'text-[#935100]',
    }],
    description:
      "I have built webservers, front ends, BPF programs, and other tools using Rust. It is my programming language of choice for <em style='color: #f8d93c;'>leet code </em> and new projects. I often use <em class='text-[#24c8db]'>Tauri</em> to create desktop applications that speed up my workflow. I've contributed to several open source Rust projects.",
  },
  {
    name: "Go",
    width: 'med',
    icon: [{
        name: "devicon:go",
        color: 'text-[#00adef]',
    }],
    description:
      "I have led a team of two other developers with in creating an internal platform for alert management. Over the course of a year, the project was able to <b style='color: #00adef;'>reduce MTTA by 20%</b> and <b style='color: #00adef;'>reduce MTTR by 80%</b>. I have also used Go to create many internal Prometheus exporters. I've contributed to several open source Go projects.",
  },
  {
    name: "Python",
    width: 'med',
    icon: [{
        name: "vscode-icons:file-type-python",
        color: 'text-[#00adef]',
    }],
    description:
      "I have built and maintained a variety of internal python packages for a team of 12 others. I've done data analysis on <em class='text-red-400'>Oracle</em> and <em class='text-orange-400'>Microsoft SQL Server</em> with python. I have contributed and built Django applications with <em class='text-pink-400'>GraphQL</em> and <em class='text-blue-200'>REST</em>. I've implemented OTEL to an OSS projects and modified open source libraries",
  },
  {

    name: "Site Reliability Engineering",
    width: 'large',
    icon: [
        {
            name: "vscode-icons:file-type-elastic",
            color: '',
        },
        {
            name: "devicon:grafana-wordmark",
            color: '',
        },
        {
            name: "devicon:prometheus",
            color: '',
        },
        {
            name: "logos:datadog-icon",
            color: '',
        },
        {
            name: "logos:vector",
            color: '',
        },
        {
            name: "mdi:telescope",
            color: 'text-[#4f5fa7]',
        },
        {
            name: "simple-icons:clickhouse",
            color: 'text-[#fefd8b]',
        }
        
    ],
    description:
      `I have SRE experience with a variety of monitoring products. I have maintained <em class='text-[#5ab8b0]'>Elasticsearch</em>, <em class='text-[#eeb748]'>Grafana</em>, <em class='text-[#d55b35]'>Prometheus</em>, <em class='text-[#fdfc9a]'>OTEL with Clickhouse</em>, and <em class='text-[#6643f5]'>Thanos</em>.
       I have used those products, <em class='text-[#5b2f9f]'>Datadog</em>, and <em class='text-[#e17946]'>Cloudwatch</em> to implement <b class='text-white'>SLOs</b>. Using these tools to navigate deployment strategies <b class='text-white'>uptime was increased from ~99.997% to ~99.99999%</b> for crucial services.
       I have worked with Projects in <b class='text-white'>Golang, Python, Java, and PHP</b> to implement <b class='text-white'>RUM, APM, Profiling, and Distributed Tracing</b>. I've assisted developers in debugging applications to reduce avg response time by ~20%.
       <br><br>I've used SNMP to monitor network and physical appliances that support infrastructure and created dashboards and reports to improve capacity planning.
      `,
  },
  {
    name: "Kafka",
    width: 'med',
    icon: [{
        name: "logos:kafka-icon",
        color: 'text-white',
    }],
    description:
      "I maintained a production kafka cluster with over 250 topics on-prem. The largest topic ingested <b class='text-white'>100,000 events per second</b>. After switching to <em class='text-[#d13e26]'>Red Panda</em>, this topic was able to maintain <b class='text-red-600'>10,000,000 events per second</b> after a consumer failure had been restored.",
  },
  {
    name: "AWS",
    width: 'med',
    icon: [{
        name: "logos:aws",
        color: 'text-white',
    }],
    description:
      "In AWS I worked on becoming <em class='text-[#d13e26]'>SOC 2</em> compliant. I used tools like <em class='text-[#5ed55c]'>Prowler</em> to examine the environment. By switching instances to <b class='text-white'>ECS</b> and later <b class='text-white'>EKS</b>, I was able to reduce cost by <b class='text-white'>10%</b>. I created snapshot policies to further reduce costs while ensure a stable environment.",  
    },
    {

        name: "Devops",
        width: 'large',
        icon: [
            {
                name: "logos:gitlab",
                color: '',
            },
            {
                name: "logos:drone-icon",
                color: '',
            },
            {
                name: "devicon:jenkins",
                color: '',
            },
            {
                name: "simple-icons:flux",
                color: 'text-[#3e67d7]',
            },
            {
                name: "logos:terraform-icon",
                color: '',
            },
            {
                name: "carbon:logo-ansible-community",
                color: 'text-white',
            },
            {
                name: "devicon:postgresql",
                color: 'text-[#4f5fa7]',
            },
            {
                name: "vscode-icons:file-type-mongo",
                color: 'text-[#fefd8b]',
            },
            {
                name: "logos:pulumi-icon",
                color: 'text-[#fefd8b]',
            }
            
        ],
        description:
          `I have manage CD pipelines with a variety of tools. These pipelines included workloads for <b class='text-white'>mobile workloads</b>, <em class='text-[#5b2f9f] font-bold'>Terraform</em>, <em class='text-white font-bold'>Ansible</em>, <em class='font-bold text-[#3e67d7]'>Flux</em>, and more.
           I was able to <b class='text-white'>reduce CI/CD runtime by 60% </b> by using best practices. I also automated alert resolutions using <em class='text-white font-bold'>Ansible</em>. I created a variety of terraform modules to deploy our services with IaC.
            <br>
            <br>
           I managed a variety of databases such as <em class='text-[#4f5fa7]'>Postgres</em>, <em class='text-[#5ca74f]'>MongoDB</em>, and <em class='text-[#d700ad]'>Surrealdb</em>. I staged regular backup, replication, and managed several major version upgrades.
           In postgres I was able to tune parameters that optimized the data for dev, staging, and prod workloads.
          `,
      },

];

export const Person: Person = {
  name: "Brandon Kauffman",
  resources: [
        {
            link: "https://github.com/bck01215",
            icon: {
                name: "mdi:github",
                color: 'text-stone-300',
            },
            name: "GitHub",
        },
        {
            link: "https://gitlab.com/bck01215",
            icon: {
                name: "mdi:gitlab",
                color: 'text-orange-400',
            },
            name: "Gitlab",
        },
        {
            link: "https://leetcode.com/bck01215/",
            icon: {
                name: "simple-icons:leetcode",
                color: 'text-[#ffac32]',
            },
            name: "Leet Code",
        },
        {
            link: "https://www.credly.com/users/brandon-kauffman",
            icon: {
                name: "simple-icons:credly",
                color: 'text-[#ff720e]',
            },
            name: "Credly",
        },

        {
            link: "https://www.linkedin.com/in/brandon-kauffman-a47b17196/",
            icon: {
                name: "mdi:linkedin",
                color: 'text-[#0a66c2]',
            },
            name: "LinkedIn",
        },
        {
            link: "https://openprofile.dev/profile/bck01215",
            icon: {
                name: "cib:linux-foundation",
                color: 'text-[#0a66c2]',
            },
            name: "LFX",
        },
        
    ],
    skills: skills
}