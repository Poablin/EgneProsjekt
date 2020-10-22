namespace RogueLikeTest
{
    class WorldModel
    {
        public Cells[] CellContent { get; private set;  }

        public WorldModel()
        {
            CellContent = new Cells[20];
        }
    }
}