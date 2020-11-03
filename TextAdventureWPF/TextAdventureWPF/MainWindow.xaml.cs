using System;
using System.IO;
using System.Windows;
using System.Windows.Media.Imaging;

namespace TextAdventureWPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public Model.GameModel GameModel = new Model.GameModel();
        public MainWindow()
        {
            InitializeComponent();
            ShowGameInfo();
        }

        public void ShowGameInfo()
        {

            MainImage.Source = new BitmapImage(new Uri(GameModel.Screens[GameModel.CurrentScreen].ImagePath, UriKind.Relative));
            StoryList.Items.Clear();
            InventoryList.Items.Clear();

            // Fikser knappe teksten
            ForwardButton.Content = GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[0] != null ? GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[0].PlaceName : "";
            BackButton.Content = GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[1] != null ? GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[1].PlaceName : "";
            LeftButton.Content = GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[2] != null ? GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[2].PlaceName : "";
            RightButton.Content = GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[3] != null ? GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[3].PlaceName : "";
            PickUpButton.Content = GameModel.Screens[GameModel.CurrentScreen].Items == null ? "" : "Pick Up";

            //InventoryList.SelectedItems.

            foreach (var line in GameModel.Screens[GameModel.CurrentScreen].GetLocationInfo())
            {
                StoryList.Items.Add(line);
            }

            GameModel.Screens[GameModel.CurrentScreen].TimesVisited++;

            foreach (var thing in GameModel.Player.GetInventoryInfo())
            {
                InventoryList.Items.Add(thing);
            }

        }

        private void ForwardButtonCall(object sender, RoutedEventArgs e)
        {
            GameModel.ChangeScreen(0);
            ShowGameInfo();
        }

        private void BackButtonCall(object sender, RoutedEventArgs e)
        {
            GameModel.ChangeScreen(1);
            ShowGameInfo();
        }
        private void LeftButtonCall(object sender, RoutedEventArgs e)
        {
            GameModel.ChangeScreen(2);
            ShowGameInfo();
        }
        private void RightButtonCall(object sender, RoutedEventArgs e)
        {
            GameModel.ChangeScreen(3);
            ShowGameInfo();
        }

        private void PickUpButtonCall(object sender, RoutedEventArgs e)
        {
            GameModel.PickUpItem();
            ShowGameInfo();
        }
    }
}
