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

interface Icon {
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
		name: 'Linux Administration',
		width: 'med',
		icon: [
			{
				name: 'ant-design:linux-outlined',
				color: 'text-stone-50'
			}
		],
		description:
			"<b style='color: #ff5f5fe5;'>RHCSA</b> and <b style='color: #fff;'>Linux+</b> certified. I have managed <em style='color: #5fe9ffe5;'>300+</em> RHEL servers implementing Satellite, IAM, and ansiblizing deployments. I led regular <b><i>systems performance</i></b> monitoring optimizing performance such as increasing IO throughput by <em style='color: #7aff5fe5;'>20%</em>." //Used BPF tooling to monitor what mount paramaters and striping were needed
	},
	{
		name: 'Kubernetes',
		width: 'large',
		icon: [
			{
				name: 'skill-icons:kubernetes',
				color: 'text-stone-50'
			},
			{
				name: 'simple-icons:cilium',
				color: 'text-yellow-200'
			},
			{
				name: 'logos:openshift',
				color: ''
			},
			{
				name: 'devicon:k3s',
				color: ''
			},
			{
				name: 'simple-icons:talos',
				color: 'text-[#f9321c]'
			}
		],
		description:
			"<p><b style='color: #326CE5;'>CKA</b> and <b class='text-yellow-200'>CCA</b> certified. I have built and managed on-prem and EKS cloud Kubernetes clusters. I utilized advanced networking features to integrate with existing infrastructure using.</p> <br> <p>I managed a 20 node physical cluster which monitored our on-prem environment of 800 VMs and 7,000 IoT devices at <b class='text-blue-400'>Liberty University.</b> This cluster also worked as the monitoring system for our larger OpenShift cluster.</p>In EKS, I led a migration to utilize spot instances where possible in an autoscaling group for EKS to reduce costs by <b class='text-red-600'>70%.</b> at <b class='text-stone-300'>Pulsar Informatics Inc.</b> I automated deployments utilizing  <em class='text-purple-400'>Terraform</em>, and <em class='text-blue-400'>Flux</em> across accounts."
	},

	{
		name: 'Rust',
		width: 'med',
		icon: [
			{
				name: 'teenyicons:rust-outline',
				color: 'text-[#935100]'
			}
		],
		description:
			"I have built webservers, front ends, BPF programs, and other tools using Rust. It is my primary programming language for <em style='color: #f8d93c;'>leet code </em> and new projects. I often use <em class='text-[#24c8db]'>Tauri</em> to create desktop applications that speed up my workflow. I've contributed to several open source Rust projects."
	},
	{
		name: 'Go',
		width: 'med',
		icon: [
			{
				name: 'devicon:go',
				color: 'text-[#00adef]'
			}
		],
		description:
			"I have led developmet on multiple projects such as an internal alert management. Over the course of a year, the project was able to <b style='color: #00adef;'>reduce MTTA by 20%</b> and <b style='color: #00adef;'>reduce MTTR by ~80%</b>. I have also used Go to create many internal Prometheus exporters. I've contributed to several open source Go projects."
	},
	{
		name: 'Python',
		width: 'med',
		icon: [
			{
				name: 'vscode-icons:file-type-python',
				color: 'text-[#00adef]'
			}
		],
		description:
			"I have built and maintained a variety of internal python packages for a team of 12 others. I've done data analysis on <em class='text-red-400'>Oracle</em> and <em class='text-orange-400'>Microsoft SQL Server</em> with python. I have contributed and built Django applications with <em class='text-pink-400'>GraphQL</em> and <em class='text-blue-200'>REST</em>. I've implemented OTEL to an OSS projects and modified open source libraries"
	},
	{
		name: 'Site Reliability Engineering',
		width: 'large',
		icon: [
			{
				name: 'vscode-icons:file-type-elastic',
				color: ''
			},
			{
				name: 'devicon:grafana-wordmark',
				color: ''
			},
			{
				name: 'devicon:prometheus',
				color: ''
			},
			{
				name: 'logos:datadog-icon',
				color: ''
			},
			{
				name: 'logos:vector',
				color: ''
			},
			{
				name: 'mdi:telescope',
				color: 'text-[#4f5fa7]'
			},
			{
				name: 'simple-icons:clickhouse',
				color: 'text-[#fefd8b]'
			}
		],
		description: `I have SRE experience with a variety of monitoring products. I have maintained <em class='text-[#5ab8b0]'>Elasticsearch</em>, <em class='text-[#eeb748]'>Grafana</em>, <em class='text-[#d55b35]'>Prometheus</em>, <em class='text-[#fdfc9a]'>OTEL with Clickhouse</em>, and <em class='text-[#6643f5]'>Thanos</em>.
       I have used those products, <em class='text-[#5b2f9f]'>Datadog</em>, and <em class='text-[#e17946]'>Cloudwatch</em> to implement <b class='text-white'>SLOs</b>. Using these tools to navigate deployment strategies <b class='text-white'>uptime was increased from ~99.997% to ~99.99999%</b> for crucial services.
       I have worked with Projects in <b class='text-white'>Golang, Python, Java, and PHP</b> to implement <b class='text-white'>RUM, APM, Profiling, and Distributed Tracing</b>. I've assisted developers in debugging applications and reduced avg response time by <b class='text-white'>~20%</b>.
       <br><br>I've used SNMP to monitor network and physical appliances that support infrastructure and created dashboards and reports to improve capacity planning.
      `
	},
	{
		name: 'Kafka/Red Panda',
		width: 'med',
		icon: [
			{
				name: 'logos:kafka-icon',
				color: 'text-white'
			},
			{
				name: 'arcticons:emoji-panda-face',
				color: 'text-[#c03617]'
			}
		],
		description:
			"I maintained a production kafka cluster with over 250 topics on-prem. The largest topic ingested <b class='text-white'>100,000 events per second</b>. After switching to <em class='text-[#d13e26]'>Red Panda</em>, this topic was able to maintain <b class='text-red-600'>10,000,000 events per second</b> after a consumer failure had been restored. I was also able to reduce servers by 40% by implementing better tunables."
	},
	{
		name: 'AWS',
		width: 'med',
		icon: [
			{
				name: 'logos:aws',
				color: 'text-white'
			}
		],
		description:
			"I am a certified <b class='text-[#ff9900]'>AWS Solutions Architect Professional</b>. By utilizing best practices I have managed to reduce cloud spend by <b class='text-white'>~15%</b>. across various services. I have implemented proper security practices to harden our organization and improved account structure for better management and scalability."
	},
	{
		name: 'Devops',
		width: 'large',
		icon: [
			{
				name: 'logos:gitlab',
				color: ''
			},
			{
				name: 'logos:drone-icon',
				color: ''
			},
			{
				name: 'devicon:jenkins',
				color: ''
			},
			{
				name: 'simple-icons:flux',
				color: 'text-[#3e67d7]'
			},
			{
				name: 'logos:terraform-icon',
				color: ''
			},
			{
				name: 'carbon:logo-ansible-community',
				color: 'text-white'
			},
			{
				name: 'devicon:postgresql',
				color: 'text-[#4f5fa7]'
			},
			{
				name: 'vscode-icons:file-type-mongo',
				color: 'text-[#fefd8b]'
			},
			{
				name: 'logos:pulumi-icon',
				color: 'text-[#fefd8b]'
			}
		],
		description: `I have managded CI/CD pipelines with a variety of tools. These pipelines included workloads for <b class='text-white'>mobile workloads</b>, <em class='text-[#5b2f9f] font-bold'>Terraform</em>, <em class='text-white font-bold'>Ansible</em>, <em class='font-bold text-[#3e67d7]'>Flux</em>, and more.
           I was able to <b class='text-white'>reduce CI/CD runtime by 60% </b> by using best practices and developed a self hosted auto-scaling cluster to process the pipelines. I automated alert resolutions for various systems by creating a service to process alerts. I managed a variety of terraform modules to deploy our services with IaC.
            <br>
           I was the SME a variety of databases such as <em class='text-[#4f5fa7]'>Postgres</em>, <em class='text-[#5ca74f]'>MongoDB</em>, and <em class='text-[#d700ad]'></em>. I staged regular backups, replication, and managed major version upgrades.
           In postgres I was able to tune parameters that optimized the data for dev, staging, and prod workloads and reduced query times.
          `
	}
];

export const Person: Person = {
	name: 'Brandon Kauffman',
	resources: [
		{
			link: 'https://github.com/bck01215',
			icon: {
				name: 'mdi:github',
				color: 'text-stone-300'
			},
			name: 'GitHub'
		},
		{
			link: 'https://gitlab.com/bck01215',
			icon: {
				name: 'mdi:gitlab',
				color: 'text-orange-400'
			},
			name: 'Gitlab'
		},
		{
			link: 'https://leetcode.com/bck01215/',
			icon: {
				name: 'simple-icons:leetcode',
				color: 'text-[#ffac32]'
			},
			name: 'Leet Code'
		},
		{
			link: 'https://www.credly.com/users/brandon-kauffman',
			icon: {
				name: 'simple-icons:credly',
				color: 'text-[#ff720e]'
			},
			name: 'Credly'
		},

		{
			link: 'https://www.linkedin.com/in/brandon-kauffman-a47b17196/',
			icon: {
				name: 'mdi:linkedin',
				color: 'text-[#0a66c2]'
			},
			name: 'LinkedIn'
		},
		{
			link: 'https://openprofile.dev/profile/bck01215',
			icon: {
				name: 'cib:linux-foundation',
				color: 'text-[#0a66c2]'
			},
			name: 'LFX'
		}
	],
	skills: skills
};
