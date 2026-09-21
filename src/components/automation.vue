<template>
  <ModalShell :show="show" @close="$emit('close')">
    <h2 class="mb-4 pr-8 text-xl font-semibold text-blue-400 sm:text-2xl">What I Offer (Workflow &amp; Process Automation)</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Design and build end-to-end automation workflows that connect your apps, eliminate repetitive tasks, and keep your data in sync across all platforms.</li>
      <li>Guidance on selecting the right low-code, no-code, or custom integration tools to streamline business operations and project pipelines.</li>
      <li>Audit existing manual processes to identify friction points and build reliable, automated background triggers.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Startups &amp; Founders</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Maximum Efficiency:</strong> Save dozens of operational hours weekly by letting automated bots handle data entry, reporting, and customer notifications.</li>
      <li><strong class="text-white">Scalable Operations:</strong> Process higher lead volumes, transactions, and user sign-ups without needing to hire additional administrative staff.</li>
      <li><strong class="text-white">Reduced Human Error:</strong> Ensure precise, consistent data transfer across your database, CRM, and communication tools.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Benefits for Students &amp; Researchers</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Automated Data Pipelines:</strong> Automatically gather, process, and organize survey, research, or sensor data directly into databases for thesis analysis.</li>
      <li><strong class="text-white">Streamlined Notifications:</strong> Set up custom Webhook triggers to push system alerts, capstone logs, or status updates to Discord, Slack, or email.</li>
      <li><strong class="text-white">Hands-Off Workflows:</strong> Focus on core academic output while routine project maintenance and backup tasks run seamlessly in the background.</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Tech Stack &amp; Tooling Options</h2>
    <ul class="mb-8 list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li><strong class="text-white">Automation Platforms:</strong> n8n, Zapier, Make (Integromat)</li>
      <li><strong class="text-white">APIs &amp; Webhooks:</strong> REST APIs, Custom Webhooks, JSON Data Parsing, Node.js Scripts</li>
      <li><strong class="text-white">Databases &amp; Cloud Sync:</strong> Firebase, Cloud Firestore, PostgreSQL, MySQL, Google Sheets API</li>
      <li><strong class="text-white">Communication Integrations:</strong> Slack APIs, Discord Webhooks, Telegram Bots, Email Automation (SendGrid/SMTP)</li>
      <li><strong class="text-white">System &amp; Hardware Triggers:</strong> Linux Cron Jobs, Docker Containers, Arduino / Serial Data Listeners</li>
    </ul>

    <h2 class="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl">Deliverables</h2>
    <ul class="list-disc space-y-2 pl-5 text-slate-300 marker:text-blue-500">
      <li>Fully Configured Automation Workflows &amp; Pipelines</li>
      <li>Visual Data Flow Architecture Map &amp; Integration Specs</li>
      <li>System Handover &amp; Operations Management Guide</li>
    </ul>
  </ModalShell>
</template>

<script setup>
import ModalShell from './modalShell.vue'

defineProps({ show: Boolean })
defineEmits(['close'])
</script>