using System;
using System.Collections.Generic;
using System.Text;

namespace TextAdventureWPF.Model
{
    public class Screen
    {
        public string PlaceName { get; set; }
        public string StoryText { get; set; }
        public string Items { get; set; }
        public int TimesVisited { get; set; }
        public Screen[] Entrances { get; set; }

        public Screen(string placeName, string storyText, string items, Screen[] entrances)
        {
            PlaceName = placeName;
            StoryText = storyText;
            Items = items;
            Entrances = entrances;
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

            if (Items != null)
            {
                list.Add($"{StoryText}");
            }

            if (Entrances != null) 
            {
                for (int i = 0; i < Entrances.Length; i++)
                {
                    list.Add($"You see an entrance to {Entrances[i].PlaceName}");
                }
            }
            return list;
        }
    }
}
