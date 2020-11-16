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
        public GameModel GameModel = new GameModel();

        public MainWindow()
        {
            InitializeComponent();
            UpdateUi();
        }

        public void UpdateUi()
        {
            UiUpdate.SetMainImage(GameModel, MainImage);

            UiUpdate.SetButtonTextToDirectionName(GameModel, ForwardButton, 0);
            UiUpdate.SetButtonTextToDirectionName(GameModel, BackButton, 1);
            UiUpdate.SetButtonTextToDirectionName(GameModel, LeftButton, 2);
            UiUpdate.SetButtonTextToDirectionName(GameModel, RightButton, 3);

            UiUpdate.ClearLists(StoryList, InventoryList);
            UiUpdate.AddInfoToList(StoryList, GameModel.Screens[GameModel.CurrentScreen].GetLocationInfo());
            UiUpdate.AddInfoToList(InventoryList, GameModel.Player.GetInventoryInfo());
        }

        private void MoveButtonCall(object sender, RoutedEventArgs e)
        {
            Button button = (Button) sender;
            GameModel.ChangeScreen(Convert.ToInt32(button.CommandParameter));
            UpdateUi();
        }

        private void PickUpButtonCall(object sender, RoutedEventArgs e)
        {
            switch (GameModel.Screens[GameModel.CurrentScreen].Items)
            {
                case null:
                    UpdateUi();
                    StoryList.Items.Add("Nothing to pick up");
                    break;
                case { } item:
                    GameModel.PickUpItem();
                    UpdateUi();
                    StoryList.Items.Add("You picked up something");
                    return;
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
                    GameModel.Use(selectedItemName);
                    UpdateUi();
                    StoryList.Items.Add($"You used {selectedItemName}");
                    return;
            }
        }
    }
}