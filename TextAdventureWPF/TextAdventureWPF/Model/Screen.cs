using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Encodings.Web;

namespace TextAdventureWPF.Model
{
    public class Screen
    {
        public string PlaceName { get; set; }
        public string StoryText { get; set; }
        public string[] Items { get; set; }
        public int TimesVisited { get; set; }
        public Screen[] Entrances { get; set; }
        public string ImagePath { get; set; }

        public Screen(string placeName, string storyText, string[] items, Screen[] entrances, string imagePath)
        {
            PlaceName = placeName;
            StoryText = storyText;
            Items = items;
            Entrances = entrances;
            ImagePath = imagePath;
        }

        public List<string> GetLocationInfo()
        {
            var list = new List<string>();

            if (PlaceName != null)
            {
                list.Add($"You are standing at {PlaceName}");
            }

            if (StoryText != null)
            {
                list.Add($"{StoryText}");
            }

            int itemsCount = 0;
            if (Items != null)
            {
                if (itemsCount == 0)
                {
                    itemsCount++;
                    list.Add("Items available:");
                }
                foreach (var item in Items)
                {
                    list.Add($"{item}");
                }
            }

            int entranceCount = 0;
            foreach (var screen in GetAvailableTravel())
            {
                if (screen != null)
                {
                    if (entranceCount == 0)
                    {
                        entranceCount++;
                        list.Add("Entrances available:");
                    }
                    list.Add(screen.PlaceName);
                }
            }
            return list;
        }

        public List<Screen> GetAvailableTravel()
        {
            var list = new List<Screen>();
            if (Entrances != null)
            {
                for (int i = 0; i < Entrances.Length; i++)
                {
                    list.Add(Entrances[i]);
                }
            }

            return list;
        }
    }
}
