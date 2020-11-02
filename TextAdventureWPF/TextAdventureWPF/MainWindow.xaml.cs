using System;
using System.Windows;

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
            StoryList.Items.Clear();
            InventoryList.Items.Clear();

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
            GameModel.CurrentScreen++;
            ShowGameInfo();
        }

        private void GoScreenBack(object sender, RoutedEventArgs e)
        {
            GameModel.CurrentScreen--;
            ShowGameInfo();
        }
    }
}
