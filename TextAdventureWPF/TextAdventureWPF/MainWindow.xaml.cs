using System;
using System.Windows;
using System.Windows.Media.Imaging;

namespace TextAdventureWPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public Model.GameModel gameModel = new Model.GameModel();
        public MainWindow()
        {
            InitializeComponent();
            UpdateGameInfo();
        }

        public void UpdateGameInfo()
        {
            MainImage.Source = new BitmapImage(new Uri(gameModel.Screens[gameModel.currentScreen].ImagePath, UriKind.Relative));
            StoryList.Items.Clear();
            InventoryList.Items.Clear();

            // Fikser knappe teksten
            ForwardButton.Content = gameModel.Screens[gameModel.currentScreen].GetAvailableTravel()[0] == null ? "" : gameModel.Screens[gameModel.currentScreen].CheckIfDoorLocked(0) ? "Locked" : gameModel.Screens[gameModel.currentScreen].GetAvailableTravel()[0].PlaceName;
            BackButton.Content = gameModel.Screens[gameModel.currentScreen].GetAvailableTravel()[1] == null ? "" : gameModel.Screens[gameModel.currentScreen].CheckIfDoorLocked(1) ? "Locked" : gameModel.Screens[gameModel.currentScreen].GetAvailableTravel()[1].PlaceName;
            LeftButton.Content = gameModel.Screens[gameModel.currentScreen].GetAvailableTravel()[2] == null ? "" : gameModel.Screens[gameModel.currentScreen].CheckIfDoorLocked(2) ? "Locked" : gameModel.Screens[gameModel.currentScreen].GetAvailableTravel()[2].PlaceName;
            RightButton.Content = gameModel.Screens[gameModel.currentScreen].GetAvailableTravel()[3] == null ? "" : gameModel.Screens[gameModel.currentScreen].CheckIfDoorLocked(3) ? "Locked" : gameModel.Screens[gameModel.currentScreen].GetAvailableTravel()[3].PlaceName;
            PickUpButton.Content = gameModel.Screens[gameModel.currentScreen].Items == null ? "" : "Pick Up";


            foreach (var line in gameModel.Screens[gameModel.currentScreen].GetLocationInfo())
            {
                StoryList.Items.Add(line);
            }

            gameModel.Screens[gameModel.currentScreen].TimesVisited++;

            foreach (var thing in gameModel.Player.GetInventoryInfo())
            {
                InventoryList.Items.Add(thing);
            }

        }

        private void ForwardButtonCall(object sender, RoutedEventArgs e)
        {
            gameModel.ChangeScreen(0);
            UpdateGameInfo();
        }

        private void BackButtonCall(object sender, RoutedEventArgs e)
        {
            gameModel.ChangeScreen(1);
            UpdateGameInfo();
        }
        private void LeftButtonCall(object sender, RoutedEventArgs e)
        {
            gameModel.ChangeScreen(2);
            UpdateGameInfo();
        }
        private void RightButtonCall(object sender, RoutedEventArgs e)
        {
            gameModel.ChangeScreen(3);
            UpdateGameInfo();
        }

        private void PickUpButtonCall(object sender, RoutedEventArgs e)
        {
            gameModel.PickUpItem();
            UpdateGameInfo();
            StoryList.Items.Add("You picked up something!");

        }

        private void UseButtonCall(object sender, RoutedEventArgs e)
        {
            gameModel.UseItem();
            UpdateGameInfo();
            StoryList.Items.Add("You used something!");
        }
    }
}
