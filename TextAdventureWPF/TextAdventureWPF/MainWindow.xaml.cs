using System;
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
            if (gameModel.Screens[gameModel.currentScreen].Items == null) return;
            gameModel.PickUpItem();
            UpdateUi();
            StoryList.Items.Add("You picked up something!");
        }

        private void UseButtonCall(object sender, RoutedEventArgs e)
        {
            if (InventoryList.SelectedItem == null)
            {
                StoryList.Items.Add("You haven't selected an item");
                return;
            }
            
            IItem selectedItem = null;
            foreach (var item in gameModel.Player.PlayerInventory.Where(item => item.ItemName == (string)InventoryList.SelectedItem)) selectedItem = item;
            switch (selectedItem)
            {
                case ItemKey key:
                    gameModel.UseItem(key);
                    UpdateUi();
                    StoryList.Items.Add($"You used {key.ItemName} and unlocked {key.ScreenUnlockName}!");
                    break;
            }
        }
    }
}