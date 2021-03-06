﻿using System;
using System.Collections.Generic;
using System.Windows.Controls;
using System.Windows.Media.Imaging;

namespace TextAdventureWPF.Model
{
    internal static class UiUpdate
    {
        public static void SetMainImage(GameModel gameModel, Image mainImage)
        {
            mainImage.Source =
                new BitmapImage(new Uri(gameModel.Screens[gameModel.CurrentScreen].ImagePath, UriKind.Relative));
        }

        public static void SetButtonTextToDirectionName(GameModel gameModel, Button button, int directionId)
        {
            button.Content = gameModel.Screens[gameModel.CurrentScreen].GetAvailableTravel()[directionId] == null
                ? ""
                :
                gameModel.Screens[gameModel.CurrentScreen].CheckIfDoorLocked(directionId)
                    ?
                    $"{gameModel.Screens[gameModel.CurrentScreen].GetAvailableTravel()[directionId].PlaceName}(Locked)"
                    : gameModel.Screens[gameModel.CurrentScreen].GetAvailableTravel()[directionId].PlaceName;
        }

        public static void ClearLists(params ItemsControl[] lists)
        {
            foreach (var itemsControl in lists)
            {
                itemsControl.Items.Clear();
            }
        }

        public static void AddInfoToList(ItemsControl list, List<string> info)
        {
            foreach (var line in info)
            {
                list.Items.Add(line);
            }
        }
    }
}
