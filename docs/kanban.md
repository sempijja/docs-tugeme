---
title: Kanban Board
sidebar_position: 4
---

# Kanban Board

The Kanban Board is an interactive project and task management tool integrated into the application. It provides a visual workflow for tracking the progress of tasks, assignments, or projects across different stages.

## Key Features

- **Drag-and-drop interface** for moving tasks between stages.
- **Multiple columns** representing workflow stages: New, In Progress, On Hold, Completed.
- **Task cards** with title, description, and assignees.
- **Add and edit cards** via modal dialogs.
- **Assign team members** to tasks, with avatars for easy identification.
- **Responsive and user-friendly UI** with support for both light and dark themes.

## How It Works

### 1. Board Structure

- The board is divided into four columns (lists):
  - **New**: Tasks that have just been created.
  - **In Progress**: Tasks currently being worked on.
  - **On Hold**: Tasks that are paused or blocked.
  - **Completed**: Finished tasks.
- Each column displays the number of tasks it contains.

### 2. Cards (Tasks)

- Each card represents a task or work item.
- Cards display the task title and the avatars of assigned team members.
- Double-clicking a card opens an edit dialog to update its details or assignees.

### 3. Adding a Card

- Click the **Add a card** button in any column to open a modal dialog.
- Enter the task title, description, and select assignees from the team member list.
- The card is added to the selected column.

### 4. Editing a Card

- Double-click a card to open the edit dialog.
- Update the title, description, or assignees as needed.

### 5. Drag-and-Drop

- Drag cards between columns to update their status.
- The board updates instantly to reflect the new workflow state.

### 6. Assignees

- Team members can be assigned to tasks.
- Avatars are shown on each card for quick identification.
- The member list is fetched from the practitioners directory and supports searching and pagination.

## Data Model & Logic

- The board state is managed by a `KanbanPresenter` class, which handles adding, moving, and resetting cards.
- All changes are reflected in the UI immediately.
- The board can be reset to its default state (all columns empty).

## Example Workflow

1. **Create a new task** in the "New" column and assign team members.
2. **Drag the card** to "In Progress" when work starts.
3. If blocked, **move the card** to "On Hold".
4. Once finished, **move the card** to "Completed".

## Benefits

- **Visual clarity**: See the status of all tasks at a glance.
- **Collaboration**: Assign and track team members for each task.
- **Flexibility**: Easily update task status with drag-and-drop.
- **Productivity**: Focus on what needs attention and track progress efficiently.

---

**Note:** The Kanban Board is especially useful for project management, HR workflows, and any scenario where tasks move through defined stages.
