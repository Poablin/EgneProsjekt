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
        public string Items { get; set; }
        public int TimesVisited { get; set; }
        public Screen[] Entrances { get; set; }
        public string ImagePath { get; set; }

        public Screen(string placeName, string storyText, string items, Screen[] entrances, string imagePath)
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

            if (Items != null)
            {
                list.Add($"{StoryText}");
            }
            
            int count = 0;
            foreach (var screen in GetAvailableTravel())
            {
                if (screen != null)
                {
                    if (count == 0)
                    {
                        count++;
                        list.Add("Available entrances:");
                    }
                    list.Add(screen.PlaceName);
                }
            }

            //if (Entrances != null) 
            //{
            //    list.Add($"Available entrances:");
            //    for (int i = 0; i < Entrances.Length; i++)
            //    {
            //        list.Add(Entrances[i].PlaceName);
            //    }
            //}
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
