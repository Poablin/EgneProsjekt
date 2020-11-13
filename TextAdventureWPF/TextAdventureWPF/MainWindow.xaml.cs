using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using TextAdventureWPF.Interfaces;
using TextAdventureWPF.Model;

namespace TextAdventureWPF
{
    public partial class MainWindow : Window
    {
        public GameModel gameModel = new GameModel();

        public MainWindow()
        {
            InitializeComponent();
            UpdateUi();
        }

        public void UpdateUi()
        {
            UiUpdate.SetMainImage(gameModel, MainImage);

            UiUpdate.SetButtonTextToDirectionName(gameModel, ForwardButton, 0);
            UiUpdate.SetButtonTextToDirectionName(gameModel, BackButton, 1);
            UiUpdate.SetButtonTextToDirectionName(gameModel, LeftButton, 2);
            UiUpdate.SetButtonTextToDirectionName(gameModel, RightButton, 3);

            UiUpdate.ClearLists(StoryList, InventoryList);
            UiUpdate.AddInfoToList(StoryList, gameModel.Screens[gameModel.currentScreen].GetLocationInfo());
            UiUpdate.AddInfoToList(InventoryList, gameModel.Player.GetInventoryInfo());
        }

        private void MoveButtonCall(object sender, RoutedEventArgs e)
        {
            Button button = (Button) sender;
            gameModel.ChangeScreen(Convert.ToInt32(button.CommandParameter));
            UpdateUi();
        }

        private void PickUpButtonCall(object sender, RoutedEventArgs e)
        {
            switch (gameModel.Screens[gameModel.currentScreen].Items)
            {
                case null:
                    UpdateUi();
                    StoryList.Items.Add("Nothing to pick up");
                    break;
                case { } item:
                    gameModel.PickUpItem();
                    UpdateUi();
                    StoryList.Items.Add("You picked up something");
                    break;
            }
        }

        private void UseButtonCall(object sender, RoutedEventArgs e)
        {
            //Finn en måte å få ut informasjon for hva itemet man brukte gjorde
            switch (InventoryList.SelectedItem)
            {
                case null:
                    UpdateUi();
                    StoryList.Items.Add("You haven't selected anything");
                    break;
                case string selectedItem:
                    var selectedItemName = selectedItem;
                    gameModel.Use(selectedItemName, StoryList);
                    UpdateUi();
                    StoryList.Items.Add($"You used {selectedItemName}");
                    break;
            }
        }
    }
}