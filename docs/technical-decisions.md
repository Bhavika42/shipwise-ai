# Technical Decisions

This document records the major technical decisions made while building ShipWise AI.

## 1. Next.js App Router

I chose Next.js App Router because it supports modern React patterns, layouts, server components, route handlers, loading states, and full-stack application development in a single framework.

## 2. TypeScript

TypeScript was selected to improve reliability, catch errors earlier, and make the codebase easier to maintain as the project grows.

## 3. REST APIs

Although Next.js supports server actions, this project uses REST API routes for core resources to demonstrate backend fundamentals and clear frontend-backend communication.

## 4. PostgreSQL and Prisma

PostgreSQL was selected as the relational database because the project contains structured relationships between users, tickets, bugs, daily updates, and activity logs. Prisma provides type-safe database access and easier migrations.

## 5. Responsible AI Suggestions

AI suggestions are treated as productivity helpers, not final answers. Users must manually verify AI-generated summaries, root-cause suggestions, and test plans before marking them as accepted.

## 6. Bug Triage Workflow

The bug module includes reproduction steps, expected behavior, actual behavior, root cause, fix summary, and verification steps to simulate a real engineering debugging workflow.

## 7. Daily Updates

The daily updates module was added to reflect remote engineering communication practices, including blockers, progress, next steps, and questions for the team.
