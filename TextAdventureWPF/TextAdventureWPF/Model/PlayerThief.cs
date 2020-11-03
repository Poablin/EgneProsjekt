using System.Collections.Generic;
using System.Linq;
using TextAdventureWPF.Interfaces;

namespace TextAdventureWPF.Model
{
    public class PlayerThief : IPlayer

    {
    public List<string> PlayerInventory { get; set; }

    public PlayerThief()
    {
        PlayerInventory = new List<string>() {"Lockpick", "Dagger"};
    }

    public List<string> GetInventoryInfo()
    {
        return PlayerInventory.ToList();
    }
    }
}