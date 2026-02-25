import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { cn } from "@/lib/utils";
import { TrueSheet } from "@lodev09/react-native-true-sheet";
import {
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  FilePlusCorner,
  Star,
  X,
} from "lucide-react-native";
import React, { useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Badge } from "./ui/badge";

export function InsightCardDetails() {
  const [inputText, setInputText] = useState("");
  const sheet = useRef<TrueSheet>(null);
  const colorScheme = useColorScheme();
  const hasText = inputText.trim().length > 0;

  // Present the sheet at the half-expanded detent (index 1 = 0.69)
  const present = async () => {
    await sheet.current?.present(1);
  };

  // Dismiss the sheet ✅
  const dismiss = async () => {
    await sheet.current?.dismiss();
    console.log("Bye bye 👋");
  };

  const handleGenerate = () => {
    if (!hasText) return;
    console.log("Generate insight:", inputText);
  };

  return (
    <View className="flex-1 bg-background">
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      > */}
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-3">
        <Pressable
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <ChevronLeft
            size={24}
            color={colorScheme === "dark" ? "#fff" : "#1a1a1a"}
          />
        </Pressable>
        <Text
          className="text-lg font-bold text-foreground"
          style={{ fontFamily: "Urbanist_700Bold" }}
        >
          Insight Card
        </Text>
        <Pressable
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="More options"
        >
          <Ellipsis
            size={24}
            color={colorScheme === "dark" ? "#fff" : "#1a1a1a"}
          />
        </Pressable>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-6"
        keyboardShouldPersistTaps="handled"
      >
        {/* Prompt Pill */}
        <View
          className={cn(
            "self-start rounded-full border px-5 py-3 mt-4 mb-6",
            colorScheme === "dark"
              ? "border-zinc-700 bg-zinc-800/50"
              : "border-gray-200 bg-gray-50",
          )}
        >
          <Text
            className="text-foreground text-sm"
            style={{ fontFamily: "Urbanist_400Regular" }}
          >
            I{"'"}m stuck planning Q1 priorities
          </Text>
        </View>

        {/* Memory Card */}
        <View className="rounded-2xl bg-primary p-5 mb-6">
          {/* Card Header */}
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center gap-2">
              <View className="size-8 rounded-full bg-white/20 items-center justify-center">
                <Star size={16} color="#fff" fill="#fff" />
              </View>
              <Text
                className="text-primary-foreground text-base font-semibold"
                style={{ fontFamily: "Urbanist_600SemiBold" }}
              >
                Memory 1
              </Text>
            </View>
            <Text
              className="text-primary-foreground/80 text-sm"
              style={{ fontFamily: "Urbanist_400Regular" }}
            >
              20th Mar, 2026
            </Text>
          </View>

          {/* Card Title */}
          <Text
            className="text-primary-foreground text-xl font-bold mb-3"
            style={{ fontFamily: "Urbanist_700Bold" }}
          >
            I{"'"}m stuck planning Q1 priorities
          </Text>

          {/* Card Body */}
          <Text
            className="text-primary-foreground/90 text-base leading-6 mb-4"
            style={{ fontFamily: "Urbanist_400Regular" }}
          >
            You may be experiencing planning overload. Consider narrowing to 3
            priority outcomes. Working long hours in physically demanding
            environments can take a toll on your mental health. Here are 5
            simple yet effective.
          </Text>

          {/* Tags */}
          <View className="flex-row flex-wrap gap-2">
            <View className="rounded-full bg-[#e7ffdf] px-4 py-1.5">
              <Text
                className="text-amber-900 text-sm font-medium"
                style={{ fontFamily: "Urbanist_500Medium" }}
              >
                Planning
              </Text>
            </View>
            <View className="rounded-full bg-amber-100 px-4 py-1.5">
              <Text
                className="text-amber-900 text-sm font-medium"
                style={{ fontFamily: "Urbanist_500Medium" }}
              >
                Overwhelm
              </Text>
            </View>
            <View className="rounded-full bg-amber-100 px-4 py-1.5">
              <Text
                className="text-amber-900 text-sm font-medium"
                style={{ fontFamily: "Urbanist_500Medium" }}
              >
                Prioritization
              </Text>
            </View>
          </View>
        </View>

        {/* Privacy Notice */}
        <Text
          className="text-muted-foreground text-sm text-center leading-5 mb-6"
          style={{ fontFamily: "Urbanist_400Regular" }}
        >
          Only sanitized insight summaries are stored.{"\n"}Raw transcripts are
          never indexed.
        </Text>

        {/* Referenced Memory Row */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Referenced Memory, 2 items"
          className={cn(
            "flex-row items-center justify-between rounded-2xl border px-5 py-4 mb-6",
            colorScheme === "dark"
              ? "border-zinc-700 bg-zinc-800/50 active:bg-zinc-700"
              : "border-gray-200 bg-slate-100 active:bg-gray-50",
          )}
          onPress={present}
        >
          <View className="flex-row items-center gap-3">
            <Text
              className="text-foreground text-base font-semibold"
              style={{ fontFamily: "Urbanist_600SemiBold" }}
            >
              Referenced Memory
            </Text>
            <View className="size-7 rounded-full bg-primary items-center justify-center">
              <Text className="text-primary-foreground text-xs font-bold">
                2
              </Text>
            </View>
          </View>
          <ChevronRight
            size={20}
            color={colorScheme === "dark" ? "#a1a1a1" : "#6b7280"}
          />
        </Pressable>

        {/* FAB spacer */}
        <View className="h-16" />
      </ScrollView>

      {/* Floating Action Button */}
      <View className="absolute right-5 bottom-2">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="New insight"
          className="size-14 rounded-full bg-primary items-center justify-center active:bg-primary/90"
          style={styles.fab}
        >
          <FilePlusCorner size={22} color="#fff" />
        </Pressable>
      </View>
      <TrueSheet
        ref={sheet}
        name="referenced-memory-sheet"
        detents={["auto", 0.69, 1]}
        cornerRadius={24}
        accessible
        accessibilityLabel="Referenced Memory bottom sheet"
        accessibilityHint="Swipe down to dismiss"
        header={() => (
          <View
            className="flex-row justify-end px-4 pt-3 pb-1"
            accessible
            accessibilityRole="header"
          >
            <Pressable
              onPress={dismiss}
              className="size-10 rounded-full bg-slate-300 items-center justify-center"
              accessibilityRole="button"
              accessibilityLabel="Close bottom sheet"
              hitSlop={8}
            >
              <X size={20} color="#fff" />
            </Pressable>
          </View>
        )}
      >
        <ScrollView
          className="px-5 pb-8"
          accessibilityRole="list"
          accessibilityLabel="Referenced memories list"
        >
          {/* Sheet Title */}
          <View className="flex-row items-center gap-3 mb-1 mt-2">
            <Text
              className="text-foreground text-xl font-bold"
              style={{ fontFamily: "Urbanist_700Bold" }}
              accessibilityRole="header"
            >
              Referenced Memory
            </Text>
            <View className="size-7 rounded-full bg-primary items-center justify-center">
              <Text
                className="text-primary-foreground text-xs font-bold"
                accessibilityLabel="2 memories"
              >
                2
              </Text>
            </View>
          </View>
          <Text
            className="text-muted-foreground text-sm mb-6"
            style={{ fontFamily: "Urbanist_400Regular" }}
          >
            See similar memories and generated insights
          </Text>

          {/* Memory Card 1 */}
          <View
            className="rounded-2xl bg-primary p-5 mb-4"
            accessible
            accessibilityRole="summary"
            accessibilityLabel="Memory 1, 20th January 2026. I'm stuck planning Q1 priorities. Tags: Planning, Overwhelm, Prioritization. Similarity 0.87"
          >
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center gap-2">
                <View className="size-8 rounded-full bg-white/20 items-center justify-center">
                  <Star size={16} color="#fff" fill="#fff" />
                </View>
                <Text
                  className="text-primary-foreground text-base font-semibold"
                  style={{ fontFamily: "Urbanist_600SemiBold" }}
                >
                  Memory 1
                </Text>
              </View>
              <Text
                className="text-primary-foreground/80 text-sm"
                style={{ fontFamily: "Urbanist_400Regular" }}
              >
                20th Jan, 2026
              </Text>
            </View>

            <Text
              className="text-primary-foreground text-xl font-bold mb-3"
              style={{ fontFamily: "Urbanist_700Bold" }}
            >
              I{"'"}m stuck planning Q1 priorities
            </Text>

            <View className="flex-row flex-wrap gap-2 mb-4">
              <Badge className="bg-[#e7ffdf]">
                <Text
                  className="text-green-900 text-sm tracking-wide"
                  style={{ fontFamily: "Urbanist_400Regular" }}
                >
                  Planning
                </Text>
              </Badge>
              <Badge className="bg-amber-100">
                <Text
                  className="text-amber-900  text-sm tracking-wide"
                  style={{ fontFamily: "Urbanist_400Regular" }}
                >
                  Overwhelm
                </Text>
              </Badge>
              <Badge className="bg-[#ffe5cb]">
                <Text
                  className="text-amber-900 text-sm tracking-wide"
                  style={{ fontFamily: "Urbanist_400Regular" }}
                >
                  Prioritization
                </Text>
              </Badge>
            </View>

            <View className="flex-row items-center justify-between">
              <Text
                className="text-primary-foreground/80 text-sm"
                style={{ fontFamily: "Urbanist_400Regular" }}
              >
                Similarity
              </Text>
              <Text
                className="text-primary-foreground text-base font-bold"
                style={{ fontFamily: "Urbanist_700Bold" }}
              >
                0.87
              </Text>
            </View>
          </View>

          {/* Memory Card 2 */}
          <View
            className="rounded-2xl p-5 mb-4"
            style={{ backgroundColor: "#3b82c8" }}
            accessible
            accessibilityRole="summary"
            accessibilityLabel="Memory 2, 10th December 2025. Struggling to narrow product roadmap goals. Tags: Roadmap, Focus, Focus. Similarity 0.87"
          >
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center gap-2">
                <View className="size-8 rounded-full bg-white/20 items-center justify-center">
                  <Star size={16} color="#fff" fill="#fff" />
                </View>
                <Text
                  className="text-base font-semibold"
                  style={{
                    fontFamily: "Urbanist_600SemiBold",
                    color: "#fff",
                  }}
                >
                  Memory 2
                </Text>
              </View>
              <Text
                className="text-sm"
                style={{
                  fontFamily: "Urbanist_400Regular",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                10th Dec, 2025
              </Text>
            </View>

            <Text
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "Urbanist_700Bold", color: "#fff" }}
            >
              Struggling to narrow product roadmap goals.
            </Text>

            <View className="flex-row flex-wrap gap-2 mb-4">
              <View className="rounded-full bg-amber-100 px-4 py-1.5">
                <Text
                  className="text-amber-900 text-sm font-medium"
                  style={{ fontFamily: "Urbanist_500Medium" }}
                >
                  Roadmap
                </Text>
              </View>
              <View className="rounded-full bg-amber-100 px-4 py-1.5">
                <Text
                  className="text-amber-900 text-sm font-medium"
                  style={{ fontFamily: "Urbanist_500Medium" }}
                >
                  Focus
                </Text>
              </View>
              <View className="rounded-full bg-amber-100 px-4 py-1.5">
                <Text
                  className="text-amber-900 text-sm font-medium"
                  style={{ fontFamily: "Urbanist_500Medium" }}
                >
                  Focus
                </Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <Text
                className="text-sm"
                style={{
                  fontFamily: "Urbanist_400Regular",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Similarity
              </Text>
              <Text
                className="text-base font-bold"
                style={{ fontFamily: "Urbanist_700Bold", color: "#fff" }}
              >
                0.87
              </Text>
            </View>
          </View>
        </ScrollView>
      </TrueSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fab: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
});
