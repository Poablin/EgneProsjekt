using System;
using System.Windows;
using System.Windows.Media;
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
            ForwardButton.Content = GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[0] != null ? GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[0].PlaceName : "Blocked";
            BackButton.Content = GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[1] != null ? GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[1].PlaceName : "Blocked";
            LeftButton.Content = GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[2] != null ? GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[2].PlaceName : "Blocked";
            RightButton.Content = GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[3] != null ? GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[3].PlaceName : "Blocked";

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

        private void GoForwardScreen(object sender, RoutedEventArgs e)
        {
            if (GameModel.Screens.IndexOf(GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[0]) != -1)
            {
                GameModel.CurrentScreen = GameModel.Screens.IndexOf(GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[0]);
            }
            ShowGameInfo();
        }

        private void GoScreenBack(object sender, RoutedEventArgs e)
        {
            if (GameModel.Screens.IndexOf(GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[1]) != -1)
            {
                GameModel.CurrentScreen = GameModel.Screens.IndexOf(GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[1]);
            }
            ShowGameInfo();
        }        
        private void GoScreenLeft(object sender, RoutedEventArgs e)
        {
            if (GameModel.Screens.IndexOf(GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[2]) != -1)
            {
                GameModel.CurrentScreen = GameModel.Screens.IndexOf(GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[2]);
            }
            ShowGameInfo();
        }       
        private void GoScreenRight(object sender, RoutedEventArgs e)
        {
            if (GameModel.Screens.IndexOf(GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[3]) != -1)
            {
                GameModel.CurrentScreen = GameModel.Screens.IndexOf(GameModel.Screens[GameModel.CurrentScreen].GetAvailableTravel()[3]);
            }
            ShowGameInfo();
        }
    }
}
