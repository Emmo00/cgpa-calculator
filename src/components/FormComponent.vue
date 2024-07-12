<script setup>
import { ref } from 'vue';

const courseCode = ref("");
const units = ref();
const grade = ref("")

const emit = defineEmits(['toast', 'addCourse'])

function addCourse() {
    if (!courseCode.value || !units.value || !grade.value) {
        emit('toast', { status: false, message: "All fields are required" });
        return;
    }
    emit('addCourse', {
        courseCode: courseCode.value,
        units: units.value,
        grade: grade.value
    })
    courseCode.value = '';
    units.value = 0;
    grade.value = '';
}
</script>
<template>
    <div class="grid gap-4">
        <div class="grid grid-cols-3 gap-4">
            <div class="space-y-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="code">Course Code</label>
                <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="code" placeholder="Enter course code" v-model="courseCode" />
            </div>
            <div class="space-y-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="units">Units</label>
                <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number" id="units" placeholder="Enter units" v-model="units" />
            </div>
            <div class="space-y-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="grade">Grade</label>
                <button type="button" role="combobox"
                    class="flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <select aria-hidden="true" tabindex="-1" style="border:0;padding:0;" class="text-slate-600" v-model="grade">
                        <option value="">Select Grade</option>
                        <option value="5">A</option>
                        <option value="4">B</option>
                        <option value="3">C</option>
                        <option value="2">D</option>
                        <option value="1">E</option>
                        <option value="0">F</option>
                    </select>
                </button>
            </div>
        </div>
        <button @click="addCourse"
            class="bg-black text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Add
            Course</button>
    </div>
</template>