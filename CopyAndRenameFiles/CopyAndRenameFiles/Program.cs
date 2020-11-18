using System;
using System.IO;
using System.Linq;

namespace CopyAndRenameFiles
{
    class Program
    {
        static void Main(string[] args)
        {
            string directory = @"C:\Users\krist\Downloads\CIA output";

            string[] filePaths = Directory.GetFiles(directory);

            foreach (string file in filePaths)
            {
                try
                {
                    string dire = Path.GetDirectoryName(file);
                    string name = Path.GetFileNameWithoutExtension(file);
                    string exte = Path.GetExtension(file);
                    //Under kan endres hva som skjer med navnet
                    name = name.Substring(6);
                    name = name.Replace("_", " ");
                    name = name.Replace("  ", " ");
                    name = name.First().ToString().ToUpper() + name.Substring(1);
                    //Her bestemmer man hvor det skal outputtes til
                    Console.WriteLine("Copying file for: " + name);
                    File.Copy($"{file}", $"{directory}\\Output\\{name}{exte}");
                }
                catch (Exception e)
                {
                    Console.WriteLine("Error File Copy");
                }
            }
        }
    }
}
