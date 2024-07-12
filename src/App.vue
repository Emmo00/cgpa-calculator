<script setup>
import FormComponent from '@/components/FormComponent.vue';
import CourseListComponent from '@/components/CourseListComponent.vue';
import CalculatedDetailsComponent from '@/components/CalculatedDetailsComponent.vue';
import persisty from 'persisty';
import { ref } from 'vue';

const courseList = ref(persisty.courseList || []);
const toastMessage = ref("Hello")
const showToast = ref(false);
const toastError = ref(true)
function addCourse(course) {
  courseList.value.push(course);
  persisty.courseList = courseList.value;
}

function toast({ message, status }) {
  toastMessage.value = message;
  toastError.value = !status
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2000);
}

function clearCourses() {
  courseList.value = []
  persisty.courseList = []
}
</script>
<template>
  <div v-if="showToast"
    class="fixed left-1/2 -translate-x-1/2 m-auto top-0 transition-all animate-pulse-slow text-xl font-bold mt-4"
    :style="toastError ? 'color:red;' : 'color:green;'">{{ toastMessage }}</div>
  <div class="h-screen flex flex-col justify-items-start items-start px-3">
    <div class="mt-16 mx-auto rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xl"
      data-v0-t="card">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">CGPA Calculator</h3>
        <p class="text-sm text-muted-foreground">Enter your course details to calculate your cumulative GPA.</p>
      </div>
      <div class="p-6">
        <FormComponent @addCourse="addCourse" @toast="toast" />
        <div class="mt-8 space-y-4">
          <CourseListComponent :courseList="courseList" @clearCourses="clearCourses" />
          <CalculatedDetailsComponent class="pt-4 px-4" :courseList="courseList" :key="courseList" />
        </div>
      </div>
    </div>
  </div>
</template>